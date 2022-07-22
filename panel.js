#targetengine session
var document = app.activeDocument;
document.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
document.viewPreferences.verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
app.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
app.activeDocument.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
app.activeDocument.zeroPoint = [0, 0];
var Labelpanel = new Window("palette");
Labelpanel.text = "Printer";
Labelpanel.orientation = "column";
Labelpanel.alignChildren = ["center", "top"];
//Labelpanel.spacing = 100;
//Labelpanel.margins = 50;
var Button1 = Labelpanel.add("button", undefined, undefined, { name: "Button 1" });
Button1.text = "Magenta 1";
Button1.onClick = function () {
    var Label = document.pages[0].textFrames.add();
    Label.properties = {
        geometricBounds: [25, 284.5, 15, 226.5],
        contents: "1234_Mag1"
    }
    Label.paragraphs[0].appliedFont = app.fonts.item("Arial");
    Label.paragraphs[0].pointSize = "30";
    Label.paragraphs[0].justification = Justification.RIGHT_ALIGN;
    //Labelpanel.close();
}
Labelpanel.show();
