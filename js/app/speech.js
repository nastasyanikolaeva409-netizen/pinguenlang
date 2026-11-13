/* ==========================================================================
   пингвинёнок — speech
   Web Speech API: английский голос, озвучка букв и обработка ошибок.
   ========================================================================== */
(function (global) {
  'use strict';

  var synth = global.speechSynthesis;
  var cachedVoice = null;

  function pickEnglishVoice() {
    if (!synth || typeof synth.getVoices !== 'function') {
      return null;
    }

    var voices = synth.getVoices() || [];
    var english = [];
    var us = [];
    var i;

    for (i = 0; i < voices.length; i += 1) {
      if (/^en([-_]|$)/i.test(voices[i].lang || '')) {
        english.push(voices[i]);
        if (/^en[-_]US/i.test(voices[i].lang || '')) {
          us.push(voices[i]);
        }
      }
    }

    function firstMatching(list, pattern) {
      for (var j = 0; j < list.length; j += 1) {
        if (pattern.test(list[j].name || '')) {
          return list[j];
        }
      }
      return null;
    }

    return firstMatching(us, /google/i) ||
      firstMatching(us, /microsoft/i) ||
      firstMatching(english, /google/i) ||
      firstMatching(english, /microsoft/i) ||
      us[0] ||
      english[0] ||
      null;
  }

  function refreshVoice() {
    cachedVoice = pickEnglishVoice();
  }

  if (synth) {
    refreshVoice();
    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', refreshVoice);
    } else {
      synth.onvoiceschanged = refreshVoice;
    }
  }

  function isSupported() {
    return !!synth && typeof global.SpeechSynthesisUtterance !== 'undefined';
  }

  function cancel() {
    if (!synth || typeof synth.cancel !== 'function') {
      return;
    }
    try {
      synth.cancel();
    } catch (error) {
      /* ignore */
    }
  }

  function speakLetter(item, callbacks) {
    callbacks = callbacks || {};

    if (!isSupported()) {
      if (typeof callbacks.onError === 'function') {
        callbacks.onError(new Error('Speech Synthesis не поддерживается этим браузером'));
      }
      return false;
    }

    cancel();

    var text = typeof item === 'string'
      ? item
      : (item && (item.speech || item.letter)) || '';
    var utterance = new global.SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    if (cachedVoice) {
      utterance.voice = cachedVoice;
    }

    var finished = false;
    function finish(error) {
      if (finished) {
        return;
      }
      finished = true;
      if (error) {
        if (typeof callbacks.onError === 'function') {
          callbacks.onError(error);
        }
      } else if (typeof callbacks.onEnd === 'function') {
        callbacks.onEnd();
      }
    }

    utterance.onstart = function () {
      if (typeof callbacks.onStart === 'function') {
        callbacks.onStart();
      }
    };
    utterance.onend = function () {
      finish();
    };
    utterance.onerror = function (event) {
      finish((event && event.error) || event || new Error('Speech Synthesis error'));
    };

    try {
      synth.speak(utterance);
    } catch (error) {
      finish(error);
      return false;
    }

    return true;
  }

  global.Speech = {
    isSupported: isSupported,
    speakLetter: speakLetter,
    cancel: cancel,
    getVoice: function () {
      return cachedVoice;
    }
  };
})(window);
