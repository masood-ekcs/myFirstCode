// set the dialog window
var labelDialog = new Window("dialog");
labelDialog.text = "Printer";
labelDialog.orientation = "column";
labelDialog.alignChildren = ["center", "top"];
labelDialog.spacing = 10;
labelDialog.margins = 16;

// set a variable that we will convey to the main function
var contents = '';

// a couple buttons
var button1 = labelDialog.add("button", undefined, undefined, { name: "Button 1" });
button1.text = "Magenta 1";
var button2 = labelDialog.add("button", undefined, undefined, { name: "Button 2" });
button2.text = "Magenta 2";

// if click --> change the variable an close the dialog
button1.onClick = function () { contents = '1234_Mag1'; labelDialog.close() };
button2.onClick = function () { contents = '5678_Mag2'; labelDialog.close() };

labelDialog.show(); // show the dialog

// if the variable is not empty --> run the main function
if (contents != '') main(contents);

// the main function, get the variable and does the work
function main(contents) {

    app.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
    app.activeDocument.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
    app.activeDocument.zeroPoint = [0, 0];

    var document = app.activeDocument;
    document.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
    document.viewPreferences.verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;

    var label = document.pages[0].textFrames.add();
    label.properties = {
        geometricBounds: [25, 284.5, 15, 226.5],
        contents: contents // <-- our variable goes here
    }
    label.paragraphs[0].appliedFont = app.fonts.item("Arial");
    label.paragraphs[0].pointSize = "30";
    label.paragraphs[0].justification = Justification.RIGHT_ALIGN;

}
