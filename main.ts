//% weight=100 color=#0fbc11 icon="\uf14e" block="Rel Compass"
namespace RelCompass {
    let initialAzimuth = 0;

    //% blockId=set_azimuth block="set azimuth %angle"
    //% angle.min=0 angle.max=360
    export function setAzimuth(angle: number): void {
        initialAzimuth = angle;
    }

    //% blockId=get_relative_heading block="relative heading"
    export function getRelativeHeading(): number {
        let heading = input.compassHeading();
        let relativeHeading = heading - initialAzimuth;
        if (relativeHeading > 180) {
            relativeHeading -= 360;
        } else if (relativeHeading < -180) {
            relativeHeading += 360;
        }
        return relativeHeading;
    }
}
