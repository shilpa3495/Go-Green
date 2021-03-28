//dark theme

var changeToDarkMode = document.querySelector("#change-to-dark-mode");

function changeToDarkModeHandler() {
  document.querySelector("#change-theme").classList.toggle("dark-theme");
  document
    .querySelector("#change-image-on-toogle")
    .classList.toggle("moon-image-active");
  document
    .querySelector("#change-image-on-toogle")
    .classList.toggle("moon-image");
}

changeToDarkMode.addEventListener("click", changeToDarkModeHandler);



// sidebar

var openSidebar = document.querySelector("#show-sidebar");

var addSidebarCollapseContainer = document.querySelector("#sidebar");

function openSidebarHandler() {
  addSidebarCollapseContainer.classList.add("sidebar-collapse-container");
  addSidebarCollapseContainer.classList.remove("sidebar-mobile-collapse");
}

openSidebar.addEventListener("click", openSidebarHandler);

var closeSidebar = document.querySelector("#hide-sidebar");

function closeSidebarHandler() {
  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

closeSidebar.addEventListener("click", closeSidebarHandler);



// alert modal
var openAlertModal = document.querySelector("#active-alert-modal");

function openHandler() {
  document.querySelector("#alert-modal-container").style.display = "block";
}
openAlertModal.addEventListener("click", openHandler);

var closeAlertModal = document.querySelector("#unactive-alert-modal");

function closeHandler() {
  document.querySelector("#alert-modal-container").style.display = "none";
}

closeAlertModal.addEventListener("click", closeHandler);

// modal

var openModal = document.querySelector("#active-modal");

function openHandlerModal() {
  document.querySelector("#modal-container").style.display = "block";
}
openModal.addEventListener("click", openHandlerModal);

var closeModal = document.querySelector("#unactive-modal");

function closeHandlerModal() {
  document.querySelector("#modal-container").style.display = "none";
}

closeModal.addEventListener("click", closeHandlerModal);

//error toast
var openErrorToast = document.querySelector("#active-error-toast");

function openErrorHandlerToast() {
  document.querySelector("#error-toast-container").style.display = "block";
}
openErrorToast.addEventListener("click", openErrorHandlerToast);

var closeErrorToast = document.querySelector("#unactive-error-toast");

function closeErrorHandlerToast() {
  document.querySelector("#error-toast-container").style.display = "none";
}

closeErrorToast.addEventListener("click", closeErrorHandlerToast);

//success toast
var openSuccessToast = document.querySelector("#active-success-toast");

function openSuccessHandlerToast() {
  document.querySelector("#success-toast-container").style.display = "block";
}
openSuccessToast.addEventListener("click", openSuccessHandlerToast);

var closeSuccessToast = document.querySelector("#unactive-success-toast");

function closeSuccessHandlerToast() {
  document.querySelector("#success-toast-container").style.display = "none";
}

closeSuccessToast.addEventListener("click", closeSuccessHandlerToast);

//Input

var inFocus = document.querySelector("#input-text");
var hidePlaceholder = document.querySelector("#input-placeholder");

function focusInHandler() {
  hidePlaceholder.style.display = "none";
}

inFocus.addEventListener("focus", focusInHandler);

function focusOutHandler() {
  hidePlaceholder.style.display = "inline-block";
}

inFocus.addEventListener("focusout", focusOutHandler);

//Error Input

var errorInFocus = document.querySelector("#error-input-text");
var hideErrorPlaceholder = document.querySelector("#error-input-placeholder");

function errorFocusInHandler() {
  hideErrorPlaceholder.style.display = "none";
}

errorInFocus.addEventListener("focus", errorFocusInHandler);

function errorFocusOutHandler() {
  hideErrorPlaceholder.style.display = "inline-block";
}

errorInFocus.addEventListener("focusout", errorFocusOutHandler);



// navigation

var avatarSection = document.querySelector("#avatar-list");
var alertSection = document.querySelector("#alert-list");
var badgeSection = document.querySelector("#badge-list");
var buttonSection = document.querySelector("#button-list");
var cardSection = document.querySelector("#card-list");
var imageSection = document.querySelector("#image-list");
var inputSection = document.querySelector("#input-list");
var listSection = document.querySelector("#lists-list");
var navigationSection = document.querySelector("#navigation-list");
var modalSection = document.querySelector("#modal-list");
var ratingSection = document.querySelector("#rating-list");
var sliderSection = document.querySelector("#slider-list");
var gridSection = document.querySelector("#grid-list");
var utilitiesSection = document.querySelector("#text-utilities-list");
var toastSection = document.querySelector("#toast-list");

avatarSection.classList.add("sidebar-list-active");

function avatarSectionHandler() {
  avatarSection.classList.add("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "block";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function alertSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.add("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "block";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function badgeSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.add("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "block";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function buttonSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.add("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "block";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function cardSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.add("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "block";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function imageSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.add("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "block";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function inputSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.add("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "block";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function listSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.add("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "block";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function navigationSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.add("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "block";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function modalSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.add("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "block";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function ratingSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.add("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "block";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function sliderSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.add("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "block";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function gridSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.add("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "block";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function utilitesSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.add("sidebar-list-active");
  toastSection.classList.remove("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "block";
  document.querySelector("#toast").style.display = "none";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function toastSectionHandler() {
  avatarSection.classList.remove("sidebar-list-active");
  alertSection.classList.remove("sidebar-list-active");
  badgeSection.classList.remove("sidebar-list-active");
  buttonSection.classList.remove("sidebar-list-active");
  cardSection.classList.remove("sidebar-list-active");
  imageSection.classList.remove("sidebar-list-active");
  inputSection.classList.remove("sidebar-list-active");
  listSection.classList.remove("sidebar-list-active");
  navigationSection.classList.remove("sidebar-list-active");
  modalSection.classList.remove("sidebar-list-active");
  ratingSection.classList.remove("sidebar-list-active");
  sliderSection.classList.remove("sidebar-list-active");
  gridSection.classList.remove("sidebar-list-active");
  utilitiesSection.classList.remove("sidebar-list-active");
  toastSection.classList.add("sidebar-list-active");

  document.querySelector("#avatar").style.display = "none";
  document.querySelector("#alert").style.display = "none";
  document.querySelector("#badge").style.display = "none";
  document.querySelector("#button").style.display = "none";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#image").style.display = "none";
  document.querySelector("#input").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.querySelector("#navigation").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  document.querySelector("#rating").style.display = "none";
  document.querySelector("#slider").style.display = "none";
  document.querySelector("#grid").style.display = "none";
  document.querySelector("#text-utilities").style.display = "none";
  document.querySelector("#toast").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

avatarSection.addEventListener("click", avatarSectionHandler);
alertSection.addEventListener("click", alertSectionHandler);
badgeSection.addEventListener("click", badgeSectionHandler);
buttonSection.addEventListener("click", buttonSectionHandler);
cardSection.addEventListener("click", cardSectionHandler);
imageSection.addEventListener("click", imageSectionHandler);
inputSection.addEventListener("click", inputSectionHandler);
listSection.addEventListener("click", listSectionHandler);
navigationSection.addEventListener("click", navigationSectionHandler);
modalSection.addEventListener("click", modalSectionHandler);
ratingSection.addEventListener("click", ratingSectionHandler);
sliderSection.addEventListener("click", sliderSectionHandler);
gridSection.addEventListener("click", gridSectionHandler);
utilitiesSection.addEventListener("click", utilitesSectionHandler);
toastSection.addEventListener("click", toastSectionHandler);
