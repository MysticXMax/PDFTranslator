// ===================== JavaScript =====================
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

/* ---------- LANGUAGE LISTS ---------- */
const languageList = [
  { code: "af", name: "Afrikaans" },
  { code: "sq", name: "Albanian" },
  { code: "am", name: "Amharic" },
  { code: "ar", name: "Arabic" },
  { code: "hy", name: "Armenian" },
  { code: "as", name: "Assamese" },
  { code: "ay", name: "Aymara" },
  { code: "az", name: "Azerbaijani" },
  { code: "bm", name: "Bambara" },
  { code: "eu", name: "Basque" },
  { code: "be", name: "Belarusian" },
  { code: "bn", name: "Bengali" },
  { code: "bho", name: "Bhojpuri" },
  { code: "bs", name: "Bosnian" },
  { code: "bg", name: "Bulgarian" },
  { code: "ca", name: "Catalan" },
  { code: "ceb", name: "Cebuano" },
  { code: "ny", name: "Chichewa" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "co", name: "Corsican" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "dv", name: "Dhivehi" },
  { code: "doi", name: "Dogri" },
  { code: "nl", name: "Dutch" },
  { code: "en", name: "English" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Estonian" },
  { code: "ee", name: "Ewe" },
  { code: "tl", name: "Filipino" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "fy", name: "Frisian" },
  { code: "gl", name: "Galician" },
  { code: "ka", name: "Georgian" },
  { code: "de", name: "German" },
  { code: "el", name: "Greek" },
  { code: "gn", name: "Guarani" },
  { code: "gu", name: "Gujarati" },
  { code: "ht", name: "Haitian Creole" },
  { code: "ha", name: "Hausa" },
  { code: "haw", name: "Hawaiian" },
  { code: "iw", name: "Hebrew" },
  { code: "hi", name: "Hindi" },
  { code: "hmn", name: "Hmong" },
  { code: "hu", name: "Hungarian" },
  { code: "is", name: "Icelandic" },
  { code: "ig", name: "Igbo" },
  { code: "ilo", name: "Ilocano" },
  { code: "id", name: "Indonesian" },
  { code: "ga", name: "Irish" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "jw", name: "Javanese" },
  { code: "kn", name: "Kannada" },
  { code: "kk", name: "Kazakh" },
  { code: "km", name: "Khmer" },
  { code: "rw", name: "Kinyarwanda" },
  { code: "gom", name: "Konkani" },
  { code: "ko", name: "Korean" },
  { code: "kri", name: "Krio" },
  { code: "ku", name: "Kurdish (Kurmanji)" },
  { code: "ckb", name: "Kurdish (Sorani)" },
  { code: "ky", name: "Kyrgyz" },
  { code: "lo", name: "Lao" },
  { code: "la", name: "Latin" },
  { code: "lv", name: "Latvian" },
  { code: "ln", name: "Lingala" },
  { code: "lt", name: "Lithuanian" },
  { code: "lg", name: "Luganda" },
  { code: "lb", name: "Luxembourgish" },
  { code: "mk", name: "Macedonian" },
  { code: "mai", name: "Maithili" },
  { code: "mg", name: "Malagasy" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "mt", name: "Maltese" },
  { code: "mi", name: "Maori" },
  { code: "mr", name: "Marathi" },
  { code: "mni-Mtei", name: "Meiteilon (Manipuri)" },
  { code: "lus", name: "Mizo" },
  { code: "mn", name: "Mongolian" },
  { code: "my", name: "Myanmar (Burmese)" },
  { code: "ne", name: "Nepali" },
  { code: "no", name: "Norwegian" },
  { code: "or", name: "Odia (Oriya)" },
  { code: "om", name: "Oromo" },
  { code: "ps", name: "Pashto" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese" },
  { code: "pa", name: "Punjabi" },
  { code: "qu", name: "Quechua" },
  { code: "ro", name: "Romanian" },
  { code: "ru", name: "Russian" },
  { code: "sm", name: "Samoan" },
  { code: "sa", name: "Sanskrit" },
  { code: "gd", name: "Scots Gaelic" },
  { code: "nso", name: "Sepedi" },
  { code: "sr", name: "Serbian" },
  { code: "st", name: "Sesotho" },
  { code: "sn", name: "Shona" },
  { code: "sd", name: "Sindhi" },
  { code: "si", name: "Sinhala" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "so", name: "Somali" },
  { code: "es", name: "Spanish" },
  { code: "su", name: "Sundanese" },
  { code: "sw", name: "Swahili" },
  { code: "sv", name: "Swedish" },
  { code: "tg", name: "Tajik" },
  { code: "ta", name: "Tamil" },
  { code: "tt", name: "Tatar" },
  { code: "te", name: "Telugu" },
  { code: "th", name: "Thai" },
  { code: "ti", name: "Tigrinya" },
  { code: "ts", name: "Tsonga" },
  { code: "tr", name: "Turkish" },
  { code: "tk", name: "Turkmen" },
  { code: "ak", name: "Twi" },
  { code: "uk", name: "Ukrainian" },
  { code: "ur", name: "Urdu" },
  { code: "ug", name: "Uyghur" },
  { code: "uz", name: "Uzbek" },
  { code: "vi", name: "Vietnamese" },
  { code: "cy", name: "Welsh" },
  { code: "xh", name: "Xhosa" },
  { code: "yi", name: "Yiddish" },
  { code: "yo", name: "Yoruba" },
  { code: "zu", name: "Zulu" },
];

/* ---------- UI INTERNATIONALIZATION ---------- */
const i18n = {
  en: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "Drag and drop PDF here or click to select",
    dropZoneSub: "Supports .pdf files",
    targetLangLabel: "Translate to",
    translateBtn: "Translate",
    tabTranslation: "📝 Translation",
    tabSummary: "📋 Summary",
    tabAudio: "🔊 Audio",
    downloadBtn: "⬇ Download PDF",
    summarizeBtn: "✨ Generate Summary",
    summaryInfo: "(extractive summarization)",
    readBtn: "🔊 Read Aloud",
    stopBtn: "⏹ Stop",
    voiceLabel: "Voice:",
    speedLabel: "Speed:",
    footerText: "PDF Translator Pro • Free & Private",
  },
  es: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "Arrastra y suelta PDF aquí o haz clic para seleccionar",
    dropZoneSub: "Admite archivos .pdf",
    targetLangLabel: "Traducir a",
    translateBtn: "Traducir",
    tabTranslation: "📝 Traducción",
    tabSummary: "📋 Resumen",
    tabAudio: "🔊 Audio",
    downloadBtn: "⬇ Descargar PDF",
    summarizeBtn: "✨ Generar resumen",
    summaryInfo: "(resumen extractivo)",
    readBtn: "🔊 Leer en voz alta",
    stopBtn: "⏹ Detener",
    voiceLabel: "Voz:",
    speedLabel: "Velocidad:",
    footerText: "PDF Translator Pro • Gratis y privado",
  },
  fr: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "Glissez-déposez un PDF ici ou cliquez pour sélectionner",
    dropZoneSub: "Prend en charge les fichiers .pdf",
    targetLangLabel: "Traduire en",
    translateBtn: "Traduire",
    tabTranslation: "📝 Traduction",
    tabSummary: "📋 Résumé",
    tabAudio: "🔊 Audio",
    downloadBtn: "⬇ Télécharger PDF",
    summarizeBtn: "✨ Générer un résumé",
    summaryInfo: "(résumé extractif)",
    readBtn: "🔊 Lire à voix haute",
    stopBtn: "⏹ Arrêter",
    voiceLabel: "Voix :",
    speedLabel: "Vitesse :",
    footerText: "PDF Translator Pro • Gratuit et privé",
  },
  de: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "PDF hierher ziehen oder zum Auswählen klicken",
    dropZoneSub: "Unterstützt .pdf-Dateien",
    targetLangLabel: "Übersetzen nach",
    translateBtn: "Übersetzen",
    tabTranslation: "📝 Übersetzung",
    tabSummary: "📋 Zusammenfassung",
    tabAudio: "🔊 Audio",
    downloadBtn: "⬇ PDF herunterladen",
    summarizeBtn: "✨ Zusammenfassung generieren",
    summaryInfo: "(extrahierende Zusammenfassung)",
    readBtn: "🔊 Vorlesen",
    stopBtn: "⏹ Stopp",
    voiceLabel: "Stimme:",
    speedLabel: "Geschwindigkeit:",
    footerText: "PDF Translator Pro • Kostenlos & privat",
  },
  "zh-CN": {
    appTitle: "PDF 翻译专家",
    dropZoneText: "拖放 PDF 至此或点击选择",
    dropZoneSub: "支持 .pdf 文件",
    targetLangLabel: "翻译为",
    translateBtn: "翻译",
    tabTranslation: "📝 翻译",
    tabSummary: "📋 摘要",
    tabAudio: "🔊 音频",
    downloadBtn: "⬇ 下载 PDF",
    summarizeBtn: "✨ 生成摘要",
    summaryInfo: "(抽取式摘要)",
    readBtn: "🔊 朗读",
    stopBtn: "⏹ 停止",
    voiceLabel: "语音：",
    speedLabel: "速度：",
    footerText: "PDF 翻译专家 • 免费且私密",
  },
  ja: {
    appTitle: "PDF翻訳プロ",
    dropZoneText: "PDFをドラッグ＆ドロップするか、クリックして選択",
    dropZoneSub: ".pdfファイルに対応",
    targetLangLabel: "翻訳先",
    translateBtn: "翻訳",
    tabTranslation: "📝 翻訳",
    tabSummary: "📋 要約",
    tabAudio: "🔊 音声",
    downloadBtn: "⬇ PDFをダウンロード",
    summarizeBtn: "✨ 要約を生成",
    summaryInfo: "(抽出型要約)",
    readBtn: "🔊 読み上げ",
    stopBtn: "⏹ 停止",
    voiceLabel: "音声：",
    speedLabel: "速度：",
    footerText: "PDF翻訳プロ • 無料・プライベート",
  },
  hi: {
    appTitle: "PDF अनुवादक प्रो",
    dropZoneText: "PDF यहाँ खींचें या चुनने के लिए क्लिक करें",
    dropZoneSub: ".pdf फ़ाइलों का समर्थन करता है",
    targetLangLabel: "अनुवाद करें",
    translateBtn: "अनुवाद करें",
    tabTranslation: "📝 अनुवाद",
    tabSummary: "📋 सारांश",
    tabAudio: "🔊 ऑडियो",
    downloadBtn: "⬇ PDF डाउनलोड करें",
    summarizeBtn: "✨ सारांश उत्पन्न करें",
    summaryInfo: "(निष्कर्षण सारांश)",
    readBtn: "🔊 ज़ोर से पढ़ें",
    stopBtn: "⏹ बंद करें",
    voiceLabel: "आवाज़:",
    speedLabel: "गति:",
    footerText: "PDF अनुवादक प्रो • मुफ़्त और निजी",
  },
  ar: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "اسحب وأفلت PDF هنا أو انقر للاختيار",
    dropZoneSub: "يدعم ملفات .pdf",
    targetLangLabel: "ترجمة إلى",
    translateBtn: "ترجم",
    tabTranslation: "📝 الترجمة",
    tabSummary: "📋 ملخص",
    tabAudio: "🔊 صوت",
    downloadBtn: "⬇ تحميل PDF",
    summarizeBtn: "✨ إنشاء ملخص",
    summaryInfo: "(ملخص استخلاصي)",
    readBtn: "🔊 اقرأ بصوت عالٍ",
    stopBtn: "⏹ توقف",
    voiceLabel: "صوت:",
    speedLabel: "السرعة:",
    footerText: "PDF Translator Pro • مجاني وخاص",
  },
  ru: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "Перетащите PDF сюда или нажмите для выбора",
    dropZoneSub: "Поддерживает файлы .pdf",
    targetLangLabel: "Перевести на",
    translateBtn: "Перевести",
    tabTranslation: "📝 Перевод",
    tabSummary: "📋 Резюме",
    tabAudio: "🔊 Аудио",
    downloadBtn: "⬇ Скачать PDF",
    summarizeBtn: "✨ Создать резюме",
    summaryInfo: "(извлекающее резюмирование)",
    readBtn: "🔊 Читать вслух",
    stopBtn: "⏹ Остановить",
    voiceLabel: "Голос:",
    speedLabel: "Скорость:",
    footerText: "PDF Translator Pro • Бесплатно и конфиденциально",
  },
  pt: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "Arraste e solte PDF aqui ou clique para selecionar",
    dropZoneSub: "Suporta arquivos .pdf",
    targetLangLabel: "Traduzir para",
    translateBtn: "Traduzir",
    tabTranslation: "📝 Tradução",
    tabSummary: "📋 Resumo",
    tabAudio: "🔊 Áudio",
    downloadBtn: "⬇ Baixar PDF",
    summarizeBtn: "✨ Gerar resumo",
    summaryInfo: "(resumo extrativo)",
    readBtn: "🔊 Ler em voz alta",
    stopBtn: "⏹ Parar",
    voiceLabel: "Voz:",
    speedLabel: "Velocidade:",
    footerText: "PDF Translator Pro • Gratuito e privado",
  },
  it: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "Trascina e rilascia PDF qui o clicca per selezionare",
    dropZoneSub: "Supporta file .pdf",
    targetLangLabel: "Traduci in",
    translateBtn: "Traduci",
    tabTranslation: "📝 Traduzione",
    tabSummary: "📋 Riepilogo",
    tabAudio: "🔊 Audio",
    downloadBtn: "⬇ Scarica PDF",
    summarizeBtn: "✨ Genera riepilogo",
    summaryInfo: "(riepilogo estrattivo)",
    readBtn: "🔊 Leggi ad alta voce",
    stopBtn: "⏹ Ferma",
    voiceLabel: "Voce:",
    speedLabel: "Velocità:",
    footerText: "PDF Translator Pro • Gratuito e privato",
  },
  nl: {
    appTitle: "PDF Translator Pro",
    dropZoneText: "Sleep PDF hierheen of klik om te selecteren",
    dropZoneSub: "Ondersteunt .pdf-bestanden",
    targetLangLabel: "Vertaal naar",
    translateBtn: "Vertalen",
    tabTranslation: "📝 Vertaling",
    tabSummary: "📋 Samenvatting",
    tabAudio: "🔊 Audio",
    downloadBtn: "⬇ PDF downloaden",
    summarizeBtn: "✨ Samenvatting genereren",
    summaryInfo: "(extractieve samenvatting)",
    readBtn: "🔊 Voorlezen",
    stopBtn: "⏹ Stop",
    voiceLabel: "Stem:",
    speedLabel: "Snelheid:",
    footerText: "PDF Translator Pro • Gratis en privé",
  },
  ko: {
    appTitle: "PDF 번역기 프로",
    dropZoneText: "PDF를 여기로 드래그하거나 클릭하여 선택하세요",
    dropZoneSub: ".pdf 파일 지원",
    targetLangLabel: "번역할 언어",
    translateBtn: "번역",
    tabTranslation: "📝 번역",
    tabSummary: "📋 요약",
    tabAudio: "🔊 오디오",
    downloadBtn: "⬇ PDF 다운로드",
    summarizeBtn: "✨ 요약 생성",
    summaryInfo: "(추출 요약)",
    readBtn: "🔊 소리 내어 읽기",
    stopBtn: "⏹ 중지",
    voiceLabel: "음성:",
    speedLabel: "속도:",
    footerText: "PDF 번역기 프로 • 무료 및 비공개",
  },
  tr: {
    appTitle: "PDF Çevirmen Pro",
    dropZoneText: "PDF'yi buraya sürükleyin veya seçmek için tıklayın",
    dropZoneSub: ".pdf dosyalarını destekler",
    targetLangLabel: "Çeviri hedefi",
    translateBtn: "Çevir",
    tabTranslation: "📝 Çeviri",
    tabSummary: "📋 Özet",
    tabAudio: "🔊 Ses",
    downloadBtn: "⬇ PDF indir",
    summarizeBtn: "✨ Özet oluştur",
    summaryInfo: "(çıkarıcı özetleme)",
    readBtn: "🔊 Sesli oku",
    stopBtn: "⏹ Durdur",
    voiceLabel: "Ses:",
    speedLabel: "Hız:",
    footerText: "PDF Çevirmen Pro • Ücretsiz ve özel",
  },
};

/* ---------- DOM REFS ---------- */
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("pdfInput");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const translateBtn = document.getElementById("translateBtn");
const languageSelect = document.getElementById("languageSelect");
const statusMessage = document.getElementById("statusMessage");
const spinner = document.getElementById("spinner");
const btnText = document.querySelector(".btn-text");
const outputContainer = document.getElementById("outputContainer");
const textOutput = document.getElementById("textOutput");
const summaryOutput = document.getElementById("summaryOutput");
const uiLangSelect = document.getElementById("uiLangSelect");
const downloadPdfBtn = document.getElementById("downloadPdfBtn");
const summarizeBtn = document.getElementById("summarizeBtn");
const readAloudBtn = document.getElementById("readAloudBtn");
const stopReadingBtn = document.getElementById("stopReadingBtn");
const voiceSelect = document.getElementById("voiceSelect");
const speedRange = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");
const audioStatus = document.getElementById("audioStatus");
const audioTextDisplay = document.getElementById("audioTextDisplay");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

let currentTranslatedText = "";
let currentSummary = "";
let speechSynthesisUtterance = null;
let voicesLoaded = false;
let currentAudioText = "";

/* ---------- POPULATE TARGET LANGUAGE SELECT ---------- */
languageList.forEach((lang) => {
  const option = document.createElement("option");
  option.value = lang.code;
  option.textContent = lang.name;
  languageSelect.appendChild(option);
});

// Restore target language from localStorage
const savedTargetLang = localStorage.getItem("targetLang");
if (savedTargetLang) languageSelect.value = savedTargetLang;

/* ---------- UI LANGUAGE ---------- */
function applyUILanguage(langCode) {
  if (!i18n[langCode]) langCode = "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[langCode][key]) {
      el.textContent = i18n[langCode][key];
    }
  });
  localStorage.setItem("uiLang", langCode);
}

// Restore UI language
const savedUiLang = localStorage.getItem("uiLang") || "en";
uiLangSelect.value = savedUiLang;
applyUILanguage(savedUiLang);

uiLangSelect.addEventListener("change", (e) => {
  applyUILanguage(e.target.value);
});

/* ---------- DROP ZONE ---------- */
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}
["dragenter", "dragover"].forEach((eventName) => {
  dropZone.addEventListener(
    eventName,
    () => dropZone.classList.add("dragover"),
    false,
  );
});
["dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(
    eventName,
    () => dropZone.classList.remove("dragover"),
    false,
  );
});
dropZone.addEventListener(
  "drop",
  (e) => handleFiles(e.dataTransfer.files),
  false,
);
dropZone.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", function () {
  handleFiles(this.files);
});

function handleFiles(files) {
  if (files.length > 0) {
    const file = files[0];
    if (file.type !== "application/pdf") {
      showMessage("Please upload a valid PDF file.", "error");
      fileInput.value = "";
      fileNameDisplay.textContent = "";
      return;
    }
    fileNameDisplay.textContent = `📎 ${file.name}`;
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInput.files = dataTransfer.files;
    showMessage("", "error");
    // Hide output if new file selected
    outputContainer.style.display = "none";
    currentTranslatedText = "";
    currentSummary = "";
  }
}

/* ---------- TRANSLATE ---------- */
translateBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  const targetLang = languageSelect.value;

  if (!file) {
    showMessage("Please select a PDF file first.", "error");
    return;
  }
  if (!targetLang) {
    showMessage("Please choose a target language.", "error");
    return;
  }
  localStorage.setItem("targetLang", targetLang);

  disableInterface(true);
  showMessage("Extracting text from PDF...", "success");

  try {
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      try {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        const fullText = await extractTextFromPDF(pdf);

        if (!fullText.trim()) {
          throw new Error(
            "No readable text found in this PDF (it might be an image/scanned PDF).",
          );
        }

        showMessage("Translating extracted text...", "success");
        const translatedText = await translateText(fullText, targetLang);

        currentTranslatedText = translatedText;
        textOutput.textContent = translatedText;
        currentSummary = ""; // clear previous summary
        summaryOutput.textContent = "";
        audioTextDisplay.textContent = "";
        outputContainer.style.display = "block";
        showMessage("Translation complete!", "success");
        // Activate translation tab
        switchTab("translation");
      } catch (err) {
        showMessage(err.message, "error");
      } finally {
        disableInterface(false);
      }
    };
    fileReader.readAsArrayBuffer(file);
  } catch (error) {
    showMessage("Error reading file structure.", "error");
    disableInterface(false);
  }
});

async function extractTextFromPDF(pdf) {
  let fullText = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const items = textContent.items.sort((a, b) => {
      const yA = a.transform[5];
      const yB = b.transform[5];
      if (Math.abs(yA - yB) < 5) return a.transform[4] - b.transform[4];
      return yB - yA;
    });
    let pageText = "";
    let lastY = null;
    for (const item of items) {
      const currentY = item.transform[5];
      if (lastY !== null) {
        const yDiff = Math.abs(lastY - currentY);
        if (yDiff < 5) pageText += " ";
        else if (yDiff < 25) {
          if (pageText.trim().endsWith("-"))
            pageText = pageText.trim().slice(0, -1);
          else pageText += " ";
        } else {
          pageText += "\n\n";
        }
      }
      pageText += item.str;
      lastY = currentY;
    }
    fullText += pageText + "\n\n";
  }
  return fullText.replace(/ {2,}/g, " ").trim();
}

async function translateText(text, targetLang) {
  const chunkSize = 4000;
  let translatedFull = "";
  for (let i = 0; i < text.length; i += chunkSize) {
    let chunkEnd = i + chunkSize;
    if (chunkEnd < text.length) {
      const lastNewline = text.lastIndexOf("\n", chunkEnd);
      if (lastNewline > i) chunkEnd = lastNewline;
    }
    const chunk = text.substring(i, chunkEnd);
    i = chunkEnd - chunkSize;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(chunk)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Translation API failed.");
      const data = await response.json();
      data[0].forEach((sentence) => {
        if (sentence[0]) translatedFull += sentence[0];
      });
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (error) {
      translatedFull += "\n[Translation Error in this block]\n";
    }
  }
  return translatedFull;
}

/* ---------- SUMMARY ---------- */
summarizeBtn.addEventListener("click", () => {
  if (!currentTranslatedText) {
    showMessage("Please translate a PDF first.", "error");
    return;
  }
  const summary = generateSummary(currentTranslatedText);
  currentSummary = summary;
  summaryOutput.textContent = summary;
  switchTab("summary");
  showMessage("Summary generated!", "success");
});

function generateSummary(text, ratio = 0.25) {
  // Simple extractive summarization using word frequency
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  if (sentences.length <= 3) return text;

  // Clean and tokenize
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/);
  const wordFreq = {};
  words.forEach((w) => {
    if (w.length > 2) wordFreq[w] = (wordFreq[w] || 0) + 1;
  });
  const maxFreq = Math.max(...Object.values(wordFreq));

  // Score sentences
  const scored = sentences.map((sent) => {
    const sentWords = sent
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/);
    let score = 0;
    sentWords.forEach((w) => {
      if (wordFreq[w]) score += wordFreq[w] / maxFreq;
    });
    return { sentence: sent, score: score / Math.max(1, sentWords.length) };
  });
  scored.sort((a, b) => b.score - a.score);
  const numSent = Math.max(1, Math.floor(sentences.length * ratio));
  const topSentences = scored.slice(0, numSent).map((s) => s.sentence);
  // Reorder by original order
  const ordered = sentences.filter((s) => topSentences.includes(s));
  return ordered.join(" ");
}

/* ---------- TEXT-TO-SPEECH ---------- */
function loadVoices() {
  const voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
  voicesLoaded = true;
}
if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices(); // immediate attempt
}

speedRange.addEventListener("input", () => {
  speedValue.textContent = parseFloat(speedRange.value).toFixed(1) + "x";
});

readAloudBtn.addEventListener("click", () => {
  if (!currentTranslatedText) {
    showMessage("Please translate a PDF first.", "error");
    return;
  }
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  const textToRead = currentTranslatedText;
  currentAudioText = textToRead;
  audioTextDisplay.textContent = textToRead;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  const selectedVoiceIndex = parseInt(voiceSelect.value);
  const voices = speechSynthesis.getVoices();
  if (selectedVoiceIndex >= 0 && selectedVoiceIndex < voices.length) {
    utterance.voice = voices[selectedVoiceIndex];
  }
  utterance.rate = parseFloat(speedRange.value);
  utterance.onstart = () => {
    audioStatus.textContent = "🔊 Reading...";
    readAloudBtn.disabled = true;
  };
  utterance.onend = () => {
    audioStatus.textContent = "✅ Reading finished.";
    readAloudBtn.disabled = false;
  };
  utterance.onerror = () => {
    audioStatus.textContent = "❌ Error reading aloud.";
    readAloudBtn.disabled = false;
  };
  speechSynthesisUtterance = utterance;
  speechSynthesis.speak(utterance);
});

stopReadingBtn.addEventListener("click", () => {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    audioStatus.textContent = "⏹ Stopped.";
    readAloudBtn.disabled = false;
  }
});

/* ---------- DOWNLOAD PDF ---------- */
downloadPdfBtn.addEventListener("click", async () => {
  if (!currentTranslatedText) {
    showMessage("No translated text to download.", "error");
    return;
  }
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const text = currentTranslatedText;

    const fontUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf";
    const response = await fetch(fontUrl);
    const arrayBuffer = await response.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    let binary = "";
    for (let i = 0; i < uint8Array.byteLength; i++) {
      binary += String.fromCharCode(uint8Array[i]);
    }
    const fontBase64 = btoa(binary);
    doc.addFileToVFS("Roboto.ttf", fontBase64);
    doc.addFont("Roboto.ttf", "Roboto", "normal");
    doc.setFont("Roboto");

    const splitText = doc.splitTextToSize(text, 180, { fontName: "Roboto" });
    let cursorY = 15;
    const pageHeight = doc.internal.pageSize.getHeight();
    const bottomMargin = 15;
    const lineHeight = 6;

    for (let i = 0; i < splitText.length; i++) {
      if (cursorY + lineHeight > pageHeight - bottomMargin) {
        doc.addPage();
        cursorY = 15;
      }
      doc.text(splitText[i], 15, cursorY);
      cursorY += lineHeight;
    }
    doc.save("translated_document.pdf");
  } catch (error) {
    alert("Failed to generate PDF. Check console.");
    console.error(error);
  }
});

/* ---------- TABS ---------- */
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");
    switchTab(tabId);
  });
});

function switchTab(tabId) {
  tabBtns.forEach((b) => b.classList.remove("active"));
  tabContents.forEach((c) => c.classList.remove("active"));
  document
    .querySelector(`.tab-btn[data-tab="${tabId}"]`)
    .classList.add("active");
  document
    .getElementById(`tab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`)
    .classList.add("active");
}

/* ---------- HELPERS ---------- */
function showMessage(text, type) {
  statusMessage.textContent = text;
  statusMessage.className = `status-message ${type || ""}`;
}

function disableInterface(disabled) {
  translateBtn.disabled = disabled;
  fileInput.disabled = disabled;
  languageSelect.disabled = disabled;
  dropZone.style.pointerEvents = disabled ? "none" : "auto";
  if (disabled) {
    btnText.style.display = "none";
    spinner.style.display = "inline-block";
  } else {
    btnText.style.display = "inline";
    spinner.style.display = "none";
  }
}
