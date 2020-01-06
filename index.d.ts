declare namespace Bangle {

    export function accelRd(register: number): Accelerometer.AccelerometerData;

    export function accelWr(register: number, data: Accelerometer.AccelerometerData);

    export function beep(time: number, frequency: number): Promise<any>;

    export function buzz(time: number, strength: number): Promise<any>;

    export function compassWr(reg: number, data: number);

    export function dbg();

    export function ioWr(mask: number, isOn: boolean): void;

    export function isCharging(): boolean;

    export function isLCDOn(): boolean;

    /**
     * Deprecated: See E.showMenu
     * @param menu 
     */
    export function menu(menu: any): any;

    export function lcdWr(cmd: number, data: any): void;

    export function off(): void;

    export function project(latlong: Utils.LatLon): Utils.Projection;

    export function setCompassPower(isOn: boolean): void;

    export function setGPSPower(isOn: boolean): void;

    export function setHRMPower(isOn: boolean): void;

    export function setLCDBrightness(brightness: number): void;

    type LcdMode = null | "direct" | "doublebuffered" | "120x120" | "80x80";

    export function setLCDMode(mode: LcdMode): void;

    type LcdPower = number | 1 | 0.9 | 0.8 | 0.7 | 0.6 | 0.5 | 0.4 | 0.3 | 0.2 | 0.1 | 0;

    export function setLCDPower(lcdPower: LcdPower): void;

    export function setLCDTimeout(timeOut?: number): void;

    export function setOptions(options: Options.BangleOptions): void;

    export function setPollInterval(interval: number): void;

    export function getLogo(menu: any): void;

    type BangleJsEvent = "accel" | "aiGesture" | "charging" | "faceUp" | "gesture" | "GPS" | "GPS-raw" | "HRM" | "lcdPower" | "mag" | "step" | "swipe" | "touch";

    // accel
    export function on(eventName: BangleJsEvent, eventHandler: Accelerometer.AccelerometerEventHandler): void;

    // aiGesture
    export function on(eventName: BangleJsEvent, eventHandler: AiGesture.GestureEventHandler): void;

    // charging
    export function on(eventName: BangleJsEvent, eventHandler: (charging: boolean) => void): void;

    // faceUp
    export function on(eventName: BangleJsEvent, eventHandler: (up: boolean) => void): void;

    // gesture
    export function on(eventName: BangleJsEvent, eventHandler: (xyz: Int8Array) => void): void;

    // GPS
    export function on(eventName: BangleJsEvent, eventHandler: (fix) => void): void;

    // GPS-raw
    export function on(eventName: BangleJsEvent, eventHandler: (nmea) => void): void;

    // HRM
    export function on(eventName: BangleJsEvent, eventHandler: (hrm) => void): void;

    // lcdPower
    export function on(eventName: BangleJsEvent, eventHandler: (on) => void): void;

    // mag
    export function on(eventName: BangleJsEvent, eventHandler: (xyz) => void): void;

    // step
    export function on(eventName: BangleJsEvent, eventHandler: (up) => void): void;

    // swipe
    export function on(eventName: BangleJsEvent, eventHandler: (direction) => void): void;

    // touch
    export function on(eventName: BangleJsEvent, eventHandler: (button) => void): void;

    namespace Accelerometer {

        interface AccelerometerData {
            x?: number;
            y?: number;
            z?: number;
            diff?: number;
            mag?: number;
        }

        type AccelerometerEventHandler = (data: AccelerometerData) => void;

    }

    namespace AiGesture {
        interface AiGestureData {
            name: string;
            weights: Array<number>;
        }
        type GestureEventHandler = (data: AiGestureData) => void;
    }

    namespace Utils {
        interface Projection {
            x: number,
            y: number
        }

        interface LatLon {
            lat: number,
            lon: number
        }
    }

    namespace Options{
        interface BangleOptions {
            /**
             * how big a difference before we consider a gesture started? default = sqr(800)
             */
            gestureStartThresh? : number,
            /**
             * how small a difference before we consider a gesture ended? default = sqr(2000)
             */
            gestureEndThresh? : number, 
            /**
             * how many samples do we keep after a gesture has ended? default = 4
             */
            gestureInactiveCount ?: number,
            /**
             * how many samples must a gesture have before we notify about it? default = 10
             */
            gestureMinLength : number,
            /**
             * How low must acceleration magnitude squared get before we consider the next rise a step? default = sqr(8192-80)
             */
            stepCounterThresholdLow : number,
            /**
             * How high must acceleration magnitude squared get before we consider it a step? default = sqr(8192+80)
             */
            stepCounterThresholdHigh : number
        }
    }
}