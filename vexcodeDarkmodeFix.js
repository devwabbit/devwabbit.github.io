if (window.location.origin !== "https://codev5.vex.com') {
    alert("Wrong tab / Drag to Bar")
    return
}

console.log("vexcideDarkModeFix Injected")
function ccsImplant(css) {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
}

// Observe for stupid extra button and autoclick
// const observer = new MutationObserver(mutations => {
//   for (const mutation of mutations) {
//     for (const node of mutation.addedNodes) {
//       if (node.nodeType !== 1) continue; // skip non-element nodes

//       // Check if the modal_wrapper is added
//       const continueBtn = node.querySelector('button:has(.icon_aligner span:contains("Continue"))');

//       // Fallback for browsers without :has() or :contains()
//       const allButtons = node.querySelectorAll('button');
//       const btn = [...allButtons].find(b => 
//         b.querySelector('.icon_aligner span')?.textContent.trim() === 'Continue'
//       );

//       if (btn) {
//         btn.click();
//         console.log('Continue button clicked!');
//       }
//     }
//   }
// });

// // Start observing the body
// observer.observe(document.body, { childList: true, subtree: true });


ccsImplant(`.monaco-editor {
    color: #000000
}
.monaco-editor .margin{
    background-color: #000000;
}
.panelContainer .categoryText {
    color: #ffffff;
}
.accordion .accordion-item {
    background-color: #000000;
}
.panelContainer .emptyLeftPanel {
    background-color: #000000;
}
.accordion .accordion-item .accordion-body {
    background: #000000;
}
.monaco-editor-background {
    background-color: #000000;
}
.panelContainer .toolbox_accordion .accordion-button {
    background: #000000 !important  ;
}
.UITabs .tabs {
    background-color: #122536;
}
.emptyPanel {
    border-top: 1px solid #122536;
    background-color: #000000;
}
.UITabs .tabs .tab.active { 
    background: #000000 !important  ;
}
.panelContainer .toolbox_accordion {
    background-color: #000000 !important;
}
.accordion .accordion-item .accordion-header .accordion-button:not(.collapsed) {
    color: #ffffff;
}
.grab {
    color: #acacac;
}
.tabbed_container[data-style=default] .tabbed_header {
    background-color: #122536;
}
.topmenu {
    background-color: #091929;
}
.project_name_wrapper .project_icon_wrapper{
    background-color: #616161;
}
.project_name_wrapper .project_name_ticker {
    background-color: #616161;
}
.tabbed_container[data-style=default] .tab_btn.curr {
    background-color: #000000;
}
.panelContainer .toolboxcollapse {
    background-color: #000000;
}
.dropdownmenu_options.slots {
    background-color: #000000;
}
.tabbed_container[data-style=side_panel] .tabbed_header {
    background-color: #122536;
    color: #ffffff;
}
#rc_wizard_wrapper {
    background-color: #122536;
}
#rc_wizard_wrapper .card_row:first-of-type, #rc_wizard_wrapper .card_row:last-of-type {
    background-color: #091929;
}
#rc_wizard_wrapper .rc_card {
    background-color: #000000;
}
#rc_wizard_wrapper .card_row .device_name_wrapper[data-for-stepname=settings] .device_icon {
    background-color: #091929;
}
#rc_wizard_wrapper .settings_wrapper select {
    background-color: #000000;
}
input.vcj {
    background-color: #000000;
}
.gearCartSelectorContainer .gearCartSelector .cartOptions {
    background-color: #122536;
    border: 3px solid #122536;
}
.gearCartSelectorContainer .gearCartSelector .cartOptions.selected {
    background-color: #091929;
}
#rc_wizard_wrapper .rc_card.collapsed.for_add_device .card_row {
    background-color: #091929;  
}
path[d^="M5.09"] {
  fill: #091929 !important;
}
#rc_wizard_wrapper .controls {
    color:#ffffff;
}
#brain_info, #controller_info {
    background-color: #000000;
}
#brain_info .info, #controller_info .info{
    background-color: #000000;
}
`)


