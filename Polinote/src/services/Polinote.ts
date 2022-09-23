import * as Tone from 'tone'
import * as Paper from 'paper'
import { Note} from "@tonaljs/tonal";
import type {coordinates} from "@/types/position";


export class Polinote {

    synth : Tone.Synth<Tone.SynthOptions>;

    note = Note.get("C5")
    noteDuration = Tone.Time("4n")
    noteVelocity = 1

    private reverbConnected = false
    reverb = new Tone.Reverb().toDestination()
    toggleReverb() {
        return this.reverbConnected = this._toggle(this.reverbConnected, this.synth.connect(this.reverb), this.synth.disconnect(this.reverb))
    }

    private delayConnected = false
    delay = new Tone.FeedbackDelay().toDestination()
    toggleDelay() {
        return this.delayConnected = this._toggle(this.delayConnected, this.synth.connect(this.delay), this.synth.disconnect(this.delay))
    }



    position : coordinates = {
        x: 100,
        y: 100
    }


    constructor(position?: coordinates) {
        if (position) {
            this.position = position;
        }

        this.synth = new Tone.Synth().toDestination()
    }



    playNote() {

        this.synth.triggerAttackRelease(this.note.name, this.noteDuration.toNotation())
    }

    getCircleWidth() {
        return this.noteVelocity * 100
    }

    render() {
        return new Paper.Path.Circle(new Paper.Point(this.position.x, this.position.y), this.getCircleWidth())
    }






    private _toggle(currentlyOpen : boolean, effectOn : any, effectOff: any) {
        if (!currentlyOpen) {
            try {
                effectOn()
            }
            catch (e) {
                return currentlyOpen
            }
            return true;
        }
        else {
            try {
                effectOff()
            }
            catch (e) {
                return currentlyOpen
            }
            return false;
        }
    }

}