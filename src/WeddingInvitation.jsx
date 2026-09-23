import React, { useEffect, useRef, useState } from "react";

const PHOTO_SRC = "/couple.jpg";
const image_1 = "/1.jpg";
const image_2 = "/2.jpg";
const musicSrc = "/classical.mp3";
const targetDate = new Date("2026-12-06T08:30:00+05:30").getTime();

const translations = {
  en: {
    lang: "en",
    groomName: "Yashwin",
    brideName: "Rakshitha",
    shareLabel: "Share",
    auspicious: "Auspicious Wedding",
    together: "Together with their families",
    tagline: "And so, our forever begins…",
    dateRequest:
      "Request the pleasure of your company ·    5–6 December 2026 · Hassan",
    inviteLine:
      "We would be honoured to have you join us as we begin this new chapter, with all the joy, laughter and blessings a wedding brings.",
    twoSouls: "Two souls",
    journey: "One beautiful journey",
    groom: "Groom",
    bride: "Bride",
    untilWe: 'Until we say "I do"',
    countdown: "Counting down to the Muhurtham",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    muhurthamNote: "Muhurtham · 8:30–9:30 AM, 6 December 2026",
    celebrationsDone: "The celebrations have begun!",
    ourStory: "Our story",
    storyTitle: "A quiet beginning, a lifelong promise",
    storyBody:
      "What started as quiet conversations slowly grew into something neither of us was looking for, yet couldn’t imagine being without. Somewhere between the small moments and the big ones, we found in each other a home. Now, surrounded by the people who have shaped our lives, we’re ready to promise each other forever.",
    blessings: "Blessings",
    invitationTitle: "With love, we invite you",
    inviteBody:
      "With the blessings of our parents and elders, we joyfully invite you and your family to celebrate the wedding ceremony of",
    inviteEnd: "Your presence and blessings will make our special day even more memorable.",
    celebrations: "The celebrations",
    schedule: "Event schedule",
    function1: "Function one",
    reception: "Reception",
    dec5: "5 December 2026",
    satVenue: "Saturday · RV Kalyana Mantapa",
    function2: "Function two",
    muhurtham: "Muhurtham",
    dec6: "6 December 2026",
    sunVenue: "Sunday, 8:30–9:30 AM · RV Kalyana Mantapa",
    cherish: "A moment we cherish",
    gallery: "Gallery",
    galleryCaption: "More moments to be added soon.",
    whereToFind: "Where to find us",
    venue: "RV Kalyana Mantapa",
    city: "Hassan, Karnataka",
    viewMap: "View on Google Maps",
    kindlyConfirm: "Kindly confirm",
    rsvp: "RSVP",
    rsvpNote: "Let us know you’re coming — it means the world to us.",
    rsvpBtn: "RSVP on WhatsApp",
    rsvpMessage:
      "Hi Yashwin & Rakshitha! We would love to join your wedding celebrations on 5-6 December 2026. Confirming our RSVP!",
    footerNote: "With love and gratitude — we can’t wait to celebrate with you.",
  },
  kn: {
    lang: "kn",
    groomName: "ಯಶ್ವಿನ್",
    brideName: "ರಕ್ಷಿತಾ",
    shareLabel: "ಹಂಚಿಕೊಳ್ಳಿ",
    auspicious: "ಶುಭ ವಿವಾಹ",
    together:
      "ತಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ ",
    tagline:
      "ಹೀಗೆ, ನಮ್ಮ ಶಾಶ್ವತ ಪಯಣ ಆರಂಭವಾಗುತ್ತದೆ...",
    dateRequest:
      "ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯನ್ನು ಕೋರುತ್ತೇವೆ · 5–6 ಡಿಸೆಂಬರ್ 2026 · ಹಾಸನ",
    inviteLine:
      "ವಿವಾಹವು ತರುವ ಎಲ್ಲ ಸಂತೋಷ, ನಗು ಮತ್ತು ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ ನಾವು ನಮ್ಮ ಜೀವನದ ಈ ಹೊಸ ಅಧ್ಯಾಯವನ್ನು ಆರಂಭಿಸುತ್ತಿರುವಾಗ, ನೀವು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳುವುದು ನಮಗೆ ಹೆಮ್ಮೆಯ ವಿಷಯವಾಗಿರುತ್ತದೆ.",
    twoSouls: "ಎರಡು ಆತ್ಮಗಳು",
    journey:
      "ಒಂದು ಸುಂದರ ಪಯಣ",
    groom: "ವರ",
    bride: "ವಧು",
    untilWe:
      "ನಾವು 'ಒಪ್ಪಿಗೆ ನೀಡುವ'ವರೆಗೂ",
    countdown:
      "ಮುಹೂರ್ತದ ಕಡೆಗೆ ಲೆಕ್ಕಗಣಿಕೆ",
    days: "ದಿನಗಳು",
    hours: "ಗಂಟೆಗಳು",
    minutes: "ನಿಮಿಷಗಳು",
    seconds: "ಸೆಕೆಂಡುಗಳು",
    muhurthamNote:
      "ಮುಹೂರ್ತ · ಬೆಳಿಗ್ಗೆ 8:30–9:30, 6 ಡಿಸೆಂಬರ್ 2026",
    celebrationsDone:
      "ಉತ್ಸವಗಳು ಪ್ರಾರಂಭವಾಗಿವೆ!",
    ourStory:
      "ನಮ್ಮ ಕಥೆ",
    storyTitle:
      "ಶಾಂತವಾದ ಪ್ರಾರಂಭ, ಜೀವನಪರ್ಯಂತದ ವಾಗ್ದಾನ",
    storyBody:
      "ಶಾಂತ ಮಾತುಕತೆಗಳಿಂದ ಪ್ರಾರಂಭವಾದದು ನಿಧಾನವಾಗಿ ಐನ್ನೇನಕ್ಕೋ ಆಗಿ ಬೆಳೆಯಿತು. ಚಿಕ್ಕ ಮತ್ತು ದೊಡ್ಡ ಕ್ಷಣಗಳ ನಡುವೆ ನಾವು ಪರಸ್ಪರರಲ್ಲಿ ಅ್ಭಿ ಆಶ್ರಯ ಕಂಡುಕೊಂಡೆವು. ಇನ್ನು ನಮ್ಮ ಜೀವನ ರೂಪಿಸಿದ ಪ್ರಿಯಮಾನವರ ನಡುವೆ ನಾವು ಐವಗಿಗೆ ವಾಗ್ದಾನ ನೀಡಲು ಸಿದ್ಧರಾಗಿದ್ದೇವೆ.",
    blessings: "ಆಶಿರ್ವಾದ",
    invitationTitle:
      "ಪ್ರೀತಿಯಿಂದ ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
    inviteBody:
      "ನಮ್ಮ ಹಿರಿಯರು ಹಾಗೂ ತಂದೆಗಳ ಆಶಿರ್ವಾದದೊಂದಿಗೆ ನಿಮ್ಮನ್ನು ಹಾಗೂ ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ಈ ವಿವಾಹ ಸಮಾರಂಭಕ್ಕೆ ಸಂತೋಷದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
    inviteEnd:
      "ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ಹಾಗೂ ಆಶಿರ್ವಾದಗಳು ನಮ್ಮ ವಿಶೇಷ ದಿನವನ್ನು ಇನ್ನೂ ಸ್ಸ್ಮರಣೀಯವಾಗಿಸುತ್ತವೆ.",
    celebrations: "ಉತ್ಸವಗಳು",
    schedule: "ಕಾರ್ಯಕ್ರಮ",
    function1:
      "ಮೊದಲನೆಯ ಕಾರ್ಯಕ್ರಮ",
    reception:
      "ರಿಸೆಪ್ಶನ್",
    dec5: "5 ಡಿಸೆಂಬರ್ 2026",
    satVenue:
      "ಶನಿವಾರ · ಆರ್ವಿ ಕಲ್ಯಾಣ ಮಂಟಪ",
    function2:
      "ಎರಡನೇ ಕಾರ್ಯಕ್ರಮ",
    muhurtham:
      "ಮುಹೂರ್ತ",
    dec6: "6 ಡಿಸೆಂಬರ್ 2026",
    sunVenue:
      "ಭಾನುವಾರ, ಬೆಳಿಗ್ಗೆ 8:30–9:30 · ಆರ್ವಿ ಕಲ್ಯಾಣ ಮಂಟಪ",
    cherish:
      "ನಾವು ಅನುಭವಿಸುವ ಕ್ಷಣ",
    gallery:
      "ಚಿತ್ರಗಳು",
    galleryCaption:
      "ಇನ್ನೂ ಅನೇಕ ಕ್ಷಣಗಳು ಶೀಘ್ರವಾಗಿ ಸೇರಿಸಲಾಗುತ್ತವೆ.",
    whereToFind:
      "ನಮ್ಮನ್ನು ಎಲ್ಲಿ ಕಾಣಬಹುದು",
    venue:
      "ಆರ್ವಿ ಕಲ್ಯಾಣ ಮಂಟಪ",
    city: "ಹಾಸನ್, ಕರ್ನಾಟಕ",
    viewMap:
      "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ನಲ್ಲಿ ನೋಡಿ",
    kindlyConfirm:
      "ದಯವಿಟ್ಟು ದೃಢಪಡಿಸಿ",
    rsvp: "ಉಪಸ್ಥಿತಿ ದೃಢಪಡಿಸಿ",
    rsvpNote:
      "ನೀವು ಬರುತ್ತಿರುವಿರಿ ಎಂದು ತಿಳಿಸಿ — ನಮಗೆ ತುಂಬಾ ಸಂತೋಷವಾಗುತ್ತೆ.",
    rsvpBtn:
      "ವಾಟ್ಸ್ಆ್ಯಪ್ನಲ್ಲಿ ಉಪಸ್ಥಿತಿ ದೃಢಪಡಿಸಿ",
    rsvpMessage:
      "ನಮಸ್ಕಾರ Yashwin & Rakshitha! 5-6 ಡಿಸೆಂಬರ್ 2026 ರಂದು ನಿಮ್ಮ ವಿವಾಹ ಉತ್ಸವದಲ್ಲಿ ಭಾಗವಹಿಸಲು ಇಚ್ಛಿಸುತ್ತೇವೆ. RSVP ದೃಢಪಡಿಸುತ್ತಿದ್ದೇವೆ!",
    footerNote:
      "ಪ್ರೀತಿ ಮತ್ತು ಕೃತಜ್ಞತೆಯಿಂದ — ನಿಮ್ಮೊಂದಿಗೆ ಸಂಭ್ರಮಿಸಲು ತುಂಬ ಆಸೆಯಾಗಿದ್ದೇವೆ.",
  },
};

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => target - Date.now());
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  const clamped = Math.max(timeLeft, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    mins: Math.floor((clamped / (1000 * 60)) % 60),
    secs: Math.floor((clamped / 1000) % 60),
    done: timeLeft <= 0,
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function WeddingInvitation() {
  const [lang, setLang] = useState("en");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const t = translations[lang];
  const { days, hours, mins, secs, done } = useCountdown(targetDate);

  const startPlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.35;
      audio.loop = true;
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio playback failed:", error);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;

    const unlockAudio = () => {
      startPlayback();
    };

    startPlayback();
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await startPlayback();
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const rsvpHref =
    "https://wa.me/919611344161?text=" + encodeURIComponent(t.rsvpMessage);
  const mapHref =
    "https://www.google.com/maps/search/?api=1&query=RV+Kalyana+Mantapa+Hassan";

  const isKn = lang === "kn";
  const bodyFont = isKn ? kannada : serifBody;

  return (
    <div style={{ ...styles.page, fontFamily: bodyFont }}>
      <audio
        ref={audioRef}
        src={musicSrc}
        preload="auto"
        autoPlay
        loop
        playsInline
        onCanPlay={startPlayback}
        style={{ display: "none" }}
      />
      <style>{fontImport}</style>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.wrap}>
          <svg width="64" height="34" viewBox="0 0 64 34" fill="none" style={{ margin: "0 auto 6px", display: "block" }}>
            <path d="M32 4C24 4 20 12 24 18C16 16 8 20 8 28" stroke="#B8912F" strokeWidth="1.2" />
            <path d="M32 4C40 4 44 12 40 18C48 16 56 20 56 28" stroke="#B8912F" strokeWidth="1.2" />
            <circle cx="32" cy="6" r="3" fill="#B8912F" />
          </svg>
          <span style={styles.accentKn}>{t.auspicious}</span>
          <p style={styles.kicker}>{t.together}</p>
          <h1 style={styles.names}>
            {t.groomName}<span style={styles.amp}>&amp;</span>{t.brideName}
          </h1>
          <p style={styles.tagline}>{t.tagline}</p>
          <p style={styles.dateLine}>{t.dateRequest}</p>

          <div style={styles.portraitWrap}>
            <div style={styles.portraitFrame}>
              <img src={PHOTO_SRC} alt={`${t.groomName} and ${t.brideName}`} style={styles.portraitImg} />
            </div>
          </div>

          <p style={styles.inviteLine}>{t.inviteLine}</p>
        </div>
      </section>

      {/* Couple */}
      <section style={styles.section}>
        <div style={styles.wrap}>
          <div style={styles.center}>
            <p style={styles.eyebrow}>{t.twoSouls}</p>
            <h2 style={styles.sectionTitle}>{t.journey}</h2>
            <div style={styles.rule} />
          </div>
          <div style={styles.coupleGrid}>
            <div style={styles.center}>
              <div style={styles.avatarRing}><span style={styles.avatarLetter}>{t.groomName.charAt(0)}</span></div>
              <p style={styles.roleEn}>{t.groom}</p>
              <h3 style={styles.coupleName}>{t.groomName}</h3>
            </div>
            <div style={styles.center}>
              <svg viewBox="0 0 24 24" fill="none" width="34" height="34">
                <path d="M12 20s-7-4.9-9.5-9.3C1 7.7 2.4 4.5 5.6 4c2.1-.3 4 .8 5 2.6C11.6 4.8 13.5 3.7 15.6 4c3.2.5 4.6 3.7 3.1 6.7C16.1 15.1 12 20 12 20Z" stroke="#B8912F" strokeWidth="1.3" />
              </svg>
            </div>
            <div style={styles.center}>
              <div style={styles.avatarRing}><span style={styles.avatarLetter}>{t.brideName.charAt(0)}</span></div>
              <p style={styles.roleEn}>{t.bride}</p>
              <h3 style={styles.coupleName}>{t.brideName}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section style={{ ...styles.section, textAlign: "center" }}>
        <div style={styles.wrap}>
          <p style={styles.eyebrow}>{t.untilWe}</p>
          <h2 style={styles.sectionTitle}>{t.countdown}</h2>
          <div style={styles.rule} />
          <div style={styles.countdownGrid}>
            {[
              [t.days, done ? 0 : days],
              [t.hours, pad(done ? 0 : hours)],
              [t.minutes, pad(done ? 0 : mins)],
              [t.seconds, pad(done ? 0 : secs)],
            ].map(([label, value]) => (
              <div key={label} style={styles.cdBox}>
                <div style={styles.cdNum}>{value}</div>
                <div style={styles.cdLabel}>{label}</div>
              </div>
            ))}
          </div>
          <p style={styles.cdNote}>{done ? t.celebrationsDone : t.muhurthamNote}</p>
        </div>
      </section>

      {/* Story */}
      <section style={styles.section}>
        <div style={styles.wrap}>
          <div style={styles.center}>
            <p style={styles.eyebrow}>{t.ourStory}</p>
            <h2 style={styles.sectionTitle}>{t.storyTitle}</h2>
            <div style={styles.rule} />
          </div>
          <p style={styles.bodyText}>{t.storyBody}</p>
        </div>
      </section>

      {/* Invitation */}
      <section style={styles.section}>
        <div style={styles.wrap}>
          <div style={styles.center}>
            <span style={styles.accentKn}>{t.blessings}</span>
            <h2 style={styles.sectionTitle}>{t.invitationTitle}</h2>
            <div style={styles.rule} />
          </div>
          <div style={styles.inviteBlock}>
            <p style={styles.bodyText}>{t.inviteBody}</p>
            <h3 style={styles.inviteNames}>{t.groomName}<span style={styles.amp}>&amp;</span>{t.brideName}</h3>
            <p style={styles.bodyText}>{t.inviteEnd}</p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section style={styles.section}>
        <div style={styles.wrap}>
          <div style={styles.center}>
            <p style={styles.eyebrow}>{t.celebrations}</p>
            <h2 style={styles.sectionTitle}>{t.schedule}</h2>
            <div style={styles.rule} />
          </div>
          <div style={styles.eventsGrid}>
            <div style={styles.eventCard}>
              <p style={styles.eventLabel}>{t.function1}</p>
              <h3 style={styles.eventName}>{t.reception}</h3>
              <p style={styles.eventDate}>{t.dec5}</p>
              <p style={styles.eventDay}>{t.satVenue}</p>
            </div>
            <div style={styles.eventCard}>
              <p style={styles.eventLabel}>{t.function2}</p>
              <h3 style={styles.eventName}>{t.muhurtham}</h3>
              <p style={styles.eventDate}>{t.dec6}</p>
              <p style={styles.eventDay}>{t.sunVenue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ ...styles.section, textAlign: "center" }}>
        <div style={styles.wrap}>
          <p style={styles.eyebrow}>{t.cherish}</p>
          <h2 style={styles.sectionTitle}>{t.gallery}</h2>
          <div style={styles.rule} />
          <div style={styles.galleryFrame}>
            <img src={PHOTO_SRC} alt={`${t.groomName} and ${t.brideName}`} style={{ width: "100%" }} />
            <img src={image_1} alt={`${t.groomName} and ${t.brideName}`} style={{ width: "100%" }} />
            <img src={image_2} alt={`${t.groomName} and ${t.brideName}`} style={{ width: "100%" }} />
          </div>
          <p style={styles.galleryCaption}>{t.galleryCaption}</p>
        </div>
      </section>

      {/* Venue */}
      <section style={styles.venueSection}>
        <div style={styles.wrap}>
          <div style={{ ...styles.center, maxWidth: 520, margin: "0 auto" }}>
            <p style={styles.eyebrow}>{t.whereToFind}</p>
            <h2 style={styles.sectionTitle}>{t.venue}</h2>
            <p style={styles.venueCity}>{t.city}</p>
            <a href={mapHref} target="_blank" rel="noopener noreferrer" style={styles.btnMaroon}>
              {t.viewMap}
            </a>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section style={{ ...styles.section, textAlign: "center" }}>
        <div style={{ ...styles.wrap, maxWidth: 480 }}>
          <p style={styles.eyebrow}>{t.kindlyConfirm}</p>
          <h2 style={styles.sectionTitle}>{t.rsvp}</h2>
          <div style={styles.rule} />
          <p style={{ color: "#6B5D4E", fontSize: 17 }}>{t.rsvpNote}</p>
          <a href={rsvpHref} target="_blank" rel="noopener noreferrer" style={styles.btnWhatsapp}>
            {t.rsvpBtn}
          </a>
        </div>
      </section>

      <div style={styles.floatingControls}>
        <div style={styles.langStack}>
          <button type="button" onClick={() => setLang("en")} style={{ ...styles.langBtn, ...(lang === "en" ? styles.langBtnActive : {}), ...styles.floatLangBtn }}>
            EN
          </button>
          <button type="button" onClick={() => setLang("kn")} style={{ ...styles.langBtn, ...(lang === "kn" ? styles.langBtnActive : {}), ...styles.floatLangBtn }}>
            ಕನ್ನಡ
          </button>
        </div>

        <a href="https://wa.me/?text=Yashwin%20%26%20Rakshitha%20Wedding%20Invitation%20https://example.com" target="_blank" rel="noopener noreferrer" style={styles.shareBtn} aria-label="Share invitation">
          {t.shareLabel}
        </a>

        <button type="button" onClick={toggleMusic} style={styles.musicBtn} aria-label={isPlaying ? "Pause music" : "Play music"}>
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M5 9v6h3l4 3V6L8 9H5Zm10.5 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 8.5v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M5 9v6h3l4 3V6L8 9H5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M15.5 8.5c1.2 1 1.9 2.3 1.9 3.5 0 1.2-.7 2.5-1.9 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      <footer style={styles.footer}>
        <div style={styles.monogram}>Y &amp; R</div>
        <p style={styles.footerNote}>{t.footerNote}</p>
      </footer>
    </div>
  );
}

/* ── fonts ── */
const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Noto+Sans+Kannada:wght@400;600&display=swap');
`;

const serifDisplay = '"Cormorant Garamond", Georgia, serif';
const serifBody = '"EB Garamond", Georgia, serif';
const kannada = '"Noto Sans Kannada", serif';

const colors = {
  maroon: "#7A1F2B",
  gold: "#B8912F",
  ivory: "#FBF6EC",
  ivoryDim: "#F3EBDA",
  ink: "#2B2118",
  inkSoft: "#6B5D4E",
  rule: "rgba(184,145,47,0.35)",
  whatsapp: "#3F6B4B",
};

const styles = {
  page: { background: colors.ivory, color: colors.ink, minHeight: "100vh" },
  wrap: { maxWidth: 920, margin: "0 auto", padding: "0 24px" },
  langBar: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "flex-end",
    gap: 8,
    padding: "10px 20px",
    background: colors.ivory,
    borderBottom: `1px solid ${colors.rule}`,
  },
  langBtn: {
    padding: "6px 18px",
    border: `1px solid ${colors.gold}`,
    background: "transparent",
    color: colors.maroon,
    fontFamily: kannada,
    fontSize: 14,
    cursor: "pointer",
    borderRadius: 2,
    transition: "all 0.2s",
  },
  langBtnActive: {
    background: colors.maroon,
    color: colors.ivory,
    borderColor: colors.maroon,
  },
  section: { padding: "64px 0" },
  center: { textAlign: "center" },
  hero: { padding: "72px 0 56px", textAlign: "center" },
  accentKn: { display: "block", fontFamily: kannada, fontSize: 16, color: colors.gold, marginBottom: 8 },
  kicker: { fontStyle: "italic", color: colors.inkSoft, fontSize: 17, marginBottom: 6 },
  names: { fontFamily: serifDisplay, fontWeight: 600, fontSize: "clamp(42px,8.5vw,78px)", color: colors.maroon, margin: 0 },
  amp: { fontStyle: "italic", color: colors.gold, padding: "0 0.12em" },
  tagline: { fontFamily: serifDisplay, fontStyle: "italic", fontSize: 22, color: colors.maroon, marginTop: 14 },
  dateLine: { marginTop: 14, fontSize: 17, letterSpacing: "0.03em", color: colors.inkSoft },
  portraitWrap: { width: "min(440px,82vw)", margin: "36px auto 8px" },
  portraitFrame: { padding: 14, background: "#fff", boxShadow: "0 18px 50px -22px rgba(43,33,24,0.45)", border: `1px solid ${colors.rule}` },
  portraitImg: { width: "100%", height: "auto", display: "block" },
  inviteLine: { marginTop: 26, fontSize: 18, color: colors.inkSoft, maxWidth: "46ch", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 },
  eyebrow: { fontStyle: "italic", color: colors.inkSoft, fontSize: 15, marginBottom: 6 },
  sectionTitle: { fontFamily: serifDisplay, fontWeight: 600, color: colors.maroon, fontSize: "clamp(26px,4.5vw,38px)", margin: 0 },
  rule: { width: "min(220px,60%)", height: 1, margin: "22px auto", background: `linear-gradient(90deg, transparent, ${colors.rule} 20%, ${colors.rule} 80%, transparent)` },
  coupleGrid: { display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 26, maxWidth: 640, margin: "36px auto 0", alignItems: "center" },
  avatarRing: { width: 104, height: 104, margin: "0 auto 16px", borderRadius: "50%", border: `1.5px solid ${colors.gold}`, display: "flex", alignItems: "center", justifyContent: "center" },
  avatarLetter: { fontFamily: serifDisplay, fontSize: 36, color: colors.maroon },
  roleEn: { fontStyle: "italic", color: colors.inkSoft, fontSize: 15, marginBottom: 8 },
  coupleName: { fontFamily: serifDisplay, fontWeight: 600, color: colors.maroon, fontSize: "clamp(26px,4.5vw,32px)", margin: 0 },
  countdownGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, maxWidth: 520, margin: "30px auto 0" },
  cdBox: { background: "#fff", border: `1px solid ${colors.rule}`, padding: "18px 6px", textAlign: "center" },
  cdNum: { fontFamily: serifDisplay, fontWeight: 600, fontSize: "clamp(30px,7vw,44px)", color: colors.maroon, lineHeight: 1 },
  cdLabel: { marginTop: 6, fontSize: 12, letterSpacing: "0.06em", color: colors.inkSoft },
  cdNote: { marginTop: 18, fontSize: 15, fontStyle: "italic", color: colors.inkSoft },
  bodyText: { maxWidth: "62ch", margin: "0 auto", fontSize: 18, lineHeight: 1.85, color: colors.ink },
  inviteBlock: { background: "#fff", border: `1px solid ${colors.rule}`, padding: 40, maxWidth: 640, margin: "32px auto 0", textAlign: "center" },
  inviteNames: { fontFamily: serifDisplay, fontWeight: 600, color: colors.maroon, fontSize: "clamp(26px,4.5vw,32px)", margin: "14px 0" },
  eventsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, maxWidth: 680, margin: "36px auto 0" },
  eventCard: { background: "#fff", border: `1px solid ${colors.rule}`, padding: "30px 26px", textAlign: "center" },
  eventLabel: { fontStyle: "italic", color: colors.inkSoft, fontSize: 15 },
  eventName: { fontFamily: serifDisplay, fontWeight: 600, fontSize: "clamp(22px,4vw,28px)", color: colors.maroon, margin: "6px 0 10px" },
  eventDate: { fontSize: 17, color: colors.ink, margin: 0 },
  eventDay: { fontSize: 14, color: colors.inkSoft, marginTop: 2 },
  galleryFrame: { maxWidth: 420, margin: "34px auto 0", padding: 12, background: "#fff", border: `1px solid ${colors.rule}`, boxShadow: "0 18px 50px -24px rgba(43,33,24,0.4)" },
  galleryCaption: { marginTop: 14, fontStyle: "italic", color: colors.inkSoft, fontSize: 15 },
  venueSection: { background: `linear-gradient(180deg, ${colors.ivoryDim}, ${colors.ivory})`, padding: "64px 0" },
  venueCity: { marginTop: 6, fontSize: 18, color: colors.inkSoft },
  btnMaroon: { display: "inline-block", marginTop: 22, padding: "13px 30px", background: colors.maroon, color: colors.ivory, textDecoration: "none", fontSize: 16, border: `1px solid ${colors.maroon}` },
  btnWhatsapp: { display: "inline-block", marginTop: 22, padding: "13px 30px", background: colors.whatsapp, color: colors.ivory, textDecoration: "none", fontSize: 16, border: `1px solid ${colors.whatsapp}` },
  floatingControls: {
    position: "fixed",
    right: 14,
    bottom: 16,
    zIndex: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  langStack: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  floatLangBtn: {
    width: 42,
    height: 30,
    padding: "4px 8px",
    borderRadius: 999,
    fontSize: 9,
    lineHeight: 1,
    letterSpacing: "0.08em",
    fontWeight: 600,
  },
  shareBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 30,
    border: `1px solid ${colors.maroon}`,
    background: "rgba(122, 31, 43, 0.96)",
    color: colors.ivory,
    borderRadius: 999,
    fontSize: 8,
    textDecoration: "none",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    boxShadow: "0 10px 22px rgba(43,33,24,0.18)",
  },
  musicBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 30,
    border: `1px solid ${colors.maroon}`,
    background: "rgba(122, 31, 43, 0.96)",
    color: colors.ivory,
    borderRadius: 999,
    cursor: "pointer",
    boxShadow: "0 10px 22px rgba(43,33,24,0.18)",
    padding: 0,
  },
  footer: { textAlign: "center", padding: "48px 0 56px" },
  monogram: { fontFamily: serifDisplay, fontSize: 22, letterSpacing: "0.15em", color: colors.gold },
  footerNote: { marginTop: 10, fontSize: 14, color: colors.inkSoft, fontStyle: "italic" },
};
