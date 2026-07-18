pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

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

languageList.forEach((lang) => {
  const option = document.createElement("option");
  option.value = lang.code;
  option.textContent = lang.name;
  languageSelect.appendChild(option);
});

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
    fileNameDisplay.textContent = `Selected: ${file.name}`;
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInput.files = dataTransfer.files;
    showMessage("", "error");
  }
}

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

        textOutput.textContent = translatedText;
        outputContainer.style.display = "block";
        showMessage("Translation complete!", "success");
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
      if (Math.abs(yA - yB) < 5) {
        return a.transform[4] - b.transform[4];
      }
      return yB - yA;
    });

    let pageText = "";
    let lastY = null;

    for (const item of items) {
      const currentY = item.transform[5];

      if (lastY !== null) {
        const yDiff = Math.abs(lastY - currentY);

        if (yDiff < 5) {
          pageText += " ";
        } else if (yDiff < 25) {
          if (pageText.trim().endsWith("-")) {
            pageText = pageText.trim().slice(0, -1);
          } else {
            pageText += " ";
          }
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
      if (lastNewline > i) {
        chunkEnd = lastNewline;
      }
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

function showMessage(text, type) {
  statusMessage.textContent = text;
  statusMessage.className = `status-message ${type}`;
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

document
  .getElementById("downloadPdfBtn")
  .addEventListener("click", async () => {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const text = document.getElementById("textOutput").innerText;

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
    }
  });
