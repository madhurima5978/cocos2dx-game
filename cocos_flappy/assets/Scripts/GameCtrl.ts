import { _decorator, 
    CCInteger,
    Component, 
    director, 
    EventKeyboard, 
    input,
    Input, 
    KeyCode, 
    Node, 
    Contact2DType,
    Collider2D, 
    IPhysics2DContact
 } from 'cc';
const { ccclass, property } = _decorator;

import { Ground } from './Ground';
import { Results } from './Results';
import { Bird } from './Bird'
import { PipePool } from './PipePool'
import { BirdAudio  } from './BirdAudio';

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    
    @property({

        type: Ground,
        tooltip: 'this is ground'
    })
    public ground: Ground


    @property({
        type: Results,
        tooltip: 'results here'
    })
    public result: Results

    @property({
        type: BirdAudio
    })
    public clip: BirdAudio;

    @property({
        type: Bird 
    })
    public bird: Bird;


    @property({
        type:PipePool
    })
    public pipeQueue: PipePool;

    @property({
        type: CCInteger
    })
    public speed: number = 300;

    @property({
        type: CCInteger
    })
    public pipeSpeed: number = 200;

    public isOver: boolean;

    onLoad(){

        this.initListener();
        this.result.resetScore();
        this.isOver = true;
        director.pause();

    }

    initListener(){

        //input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this );

        this.node.on(Node.EventType.TOUCH_START, () => {
            if(this.isOver == true)
            {
                this.resetGame();
                this.bird.resetBird();
                this.startGame();
            }
            if(this.isOver == false){
                this.bird.fly();
                this.clip.onAudioQueue(0);
            }
            
        })

    }
    // //testing method delete at last
    // onKeyDown(event: EventKeyboard){
    //     switch(event.keyCode){
    //         case KeyCode.KEY_A:
    //             this.gameOver();
    //         break;
    //         case KeyCode.KEY_P:
    //             this.result.addScore();
    //         break;
    //         case KeyCode.KEY_Q:
    //             this.resetGame();
    //             this.bird.resetBird();
    //     }
    // }
    startGame(){

        this.result.hideResults();
        director.resume();
    }

    gameOver(){
        this.result.showResults();
        this.isOver = true;
        director.pause();
        this.clip.onAudioQueue(3);
    }

    resetGame(){
        this.result.resetScore();
        this.pipeQueue.reset();
        this.isOver = false;
        this.startGame();
    }
    passPipe(){
        this.result.addScore();
        this.clip.onAudioQueue(1);
    }

    createPipe(){
        this.pipeQueue.addPool();

    }
    contactGroundPipe(){
        let Collider = this.bird.getComponent(Collider2D)

        if(Collider){
            Collider.on(Contact2DType.BEGIN_CONTACT,  this
                .onBeginContact, this)
        }
    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contaxt:IPhysics2DContact | null){
        this.bird.hitSomething = true;
        this.clip.onAudioQueue(2);

    }

    birdStruck(){
        this.contactGroundPipe()

        if(this.bird.hitSomething == true){
            this.gameOver()
        }
    }

    update(){
        if(this.isOver == false){
            this.birdStruck();
        }
    }
    
}


