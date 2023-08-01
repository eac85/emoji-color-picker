import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji-display',
  templateUrl: './emoji-display.component.html',
  styleUrls: ['./emoji-display.component.css']
})
export class EmojiDisplayComponent {
   redEmojis = ['❤️', '🍎', '🚗', '🚒', '🌹', '🍓', '🍅', '🥊', '🔴', '🎈', '🎒', '🌶️', '🍄', '🍷', '🍉', '🌺', '🎀', '🌶️', '🎠', '🚀'];
   yellowEmojis = ['💛', '🌼', '🐥', '🌻', '🌕', '🌟', '🌞', '🚕', '⭐', '🎗️', '🐝', '🎪', '🍋', '🍯', '🍌', '🍀', '🚜', '🔔', '🎡', '🐤'];
   greenEmojis = ['💚', '🌳', '🍀', '🌿', '🍏', '🐢', '🍐', '🐸', '🌵', '🌲', '🐉', '🍃', '🚛', '🚦', '🎄', '🐢', '🍈', '🎾', '🍈', '🍉'];
   purpleEmojis = ['💜', '🦄', '🎆', '🌂', '🎵', '🎸', '🍇', '🦑', '🍆', '🎼', '🔮', '🎵', '🦔', '🌌', '🔮', '🌆', '🎹', '🌸', '🌈', '🎺'];
   blueEmojis = ['💙', '🌊', '🦋', '🌌', '🌠', '🎶', '🐳', '🐬', '🚙', '🔵', '🎨', '🚀', '🔷', '💦', '🐟', '🛵', '🎐', '🦋', '🦢', '🌈'];
   orangeEmojis = ['🧡', '🍊', '🦁', '🐅', '🐒', '🔥', '🌅', '🌇', '🚒', '🍁', '🎃', '🎑', '🌕', '🌥️', '🦊', '🚀', '🍂', '🔶', '🌞', '🎈'];
   pinkEmojis = ['💗', '🎀', '🌸', '💕', '🐷', '💘', '🌷', '🎈', '🎆', '🍇', '🎵', '🦄', '🎵', '🎶', '🌸', '🦢', '🎀', '🌸', '🎆', '🎈'];
   brownEmojis = ['🤎', '🦔', '🐕', '🦊', '🌰', '🦉', '🍫', '🍂', '🐻', '🌾', '🍯', '🏇', '🚙', '🎃', '🌰', '🦡', '🐕', '🐿️', '🦢', '🌲'];


  getSelectedEmoji(){
    const randomNumber = Math.random();
    const scaledNumber = Math.floor(randomNumber * 8) + 1;
    if(scaledNumber == 1) return this.redEmojis;
    else if(scaledNumber == 2) return this.redEmojis;
    else if(scaledNumber == 3) return this.yellowEmojis;
    else if(scaledNumber == 4) return this.greenEmojis;
    else if(scaledNumber == 5) return this.purpleEmojis;
    else if(scaledNumber == 6) return this.blueEmojis;
    else if(scaledNumber == 7) return this.orangeEmojis;
    else if(scaledNumber == 8) return this.pinkEmojis;
    else if(scaledNumber == 8) return this.brownEmojis;


    else return this.pinkEmojis;
  }
  
}
