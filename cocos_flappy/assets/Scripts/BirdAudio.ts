import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdAudio')
export class BirdAudio extends Component {
   
    @property({
        type: [AudioClip]
    })
    public clips: AudioClip[] = []

    @property({
        type:AudioSource
    })
    public audioSouce: AudioSource = null;

    onAudioQueue(index: number){
        let clip: AudioClip = this.clips[index]

        this.audioSouce.playOneShot(clip);
    }
}


