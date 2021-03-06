'use strict';
/* Globals */
const colorDivs = document.querySelectorAll("div.color");
const generateBtn = document.querySelector("button.generate");
const sliders = document.querySelectorAll("div.sliders input");
const currentHexes = document.querySelectorAll("div.color h2");
const copyPopup = document.querySelector("section.copy-container");
const adjustButton = document.querySelectorAll(".adjust");
const closeAdjustment = document.querySelectorAll("button.close-adjustment");
const sliderContainers = document.querySelectorAll("div.sliders");
const lockButton = document.querySelectorAll("button.lock");
const saveButton = document.querySelector("button.save");
const saveContainer = document.querySelector("section.save-container");
const closeSave = saveContainer.querySelector("button.close-save");
const submitButton = saveContainer.querySelector("button.submit-save");
const saveInput = document.querySelector("input.save-name");
const toastMessage = document.querySelector("span.toast-message");
const libraryContainer = document.querySelector("section.library-container");
const paletteList = libraryContainer.querySelector("#palettes-list");
const libraryBtn = document.querySelector("button.library");
const closeLibrary = document.querySelector("button.close-library");
const infoMessage = document.querySelector("span.info-message");
const removed = paletteList.querySelector("div.removed");
let initialColors;
let savedPalettes = [];
