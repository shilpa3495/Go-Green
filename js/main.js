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


// navigation

var sidebarItems = document.querySelectorAll(
  ".sidebar-nav-unordered-list .sidebar-nav-item"
);
var mainContainerSection = document.querySelectorAll(
  ".main-content .section-container"
);

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

function unactiveElementClassRemove() {
  sidebarItems.forEach(listItem =>
    listItem.classList.remove("sidebar-list-active")
  );

  mainContainerSection.forEach(section => (section.style.display = "none"));
}

function avatarSectionHandler() {
  unactiveElementClassRemove();

  avatarSection.classList.add("sidebar-list-active");
  document.querySelector("#avatar").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function alertSectionHandler() {
  unactiveElementClassRemove();

  alertSection.classList.add("sidebar-list-active");
  document.querySelector("#alert").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function badgeSectionHandler() {
  unactiveElementClassRemove();

  badgeSection.classList.add("sidebar-list-active");
  document.querySelector("#badge").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function buttonSectionHandler() {
  unactiveElementClassRemove();

  buttonSection.classList.add("sidebar-list-active");
  document.querySelector("#button").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function cardSectionHandler() {
  unactiveElementClassRemove();

  cardSection.classList.add("sidebar-list-active");
  document.querySelector("#card").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function imageSectionHandler() {
  unactiveElementClassRemove();

  imageSection.classList.add("sidebar-list-active");
  document.querySelector("#image").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function inputSectionHandler() {
  unactiveElementClassRemove();

  inputSection.classList.add("sidebar-list-active");
  document.querySelector("#input").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function listSectionHandler() {
  unactiveElementClassRemove();

  listSection.classList.add("sidebar-list-active");
  document.querySelector("#list").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function navigationSectionHandler() {
  unactiveElementClassRemove();

  navigationSection.classList.add("sidebar-list-active");
  document.querySelector("#navigation").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function modalSectionHandler() {
  unactiveElementClassRemove();
  modalSection.classList.add("sidebar-list-active");
  document.querySelector("#modal").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function ratingSectionHandler() {
  unactiveElementClassRemove();
  ratingSection.classList.add("sidebar-list-active");
  document.querySelector("#rating").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function sliderSectionHandler() {
  unactiveElementClassRemove();

  sliderSection.classList.add("sidebar-list-active");
  document.querySelector("#slider").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function gridSectionHandler() {

  unactiveElementClassRemove();
  gridSection.classList.add("sidebar-list-active");
  document.querySelector("#grid").style.display = "block";


  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function utilitesSectionHandler() {

  unactiveElementClassRemove();
  utilitiesSection.classList.add("sidebar-list-active");
  document.querySelector("#text-utilities").style.display = "block";

  addSidebarCollapseContainer.classList.add("sidebar-mobile-collapse");
  addSidebarCollapseContainer.classList.remove("sidebar-collapse-container");
}

function toastSectionHandler() {
  
  unactiveElementClassRemove();
  document.querySelector("#toast").style.display = "block";
  toastSection.classList.add("sidebar-list-active");

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
