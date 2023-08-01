import { Component } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { Subject, Observable } from 'rxjs';



@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
   showColorPickerFlag = true;
   stringColor = 'white';
   selectedColor = '🔍'; // Default color
   emojiList = ' '; 
   redEmojis = ['❤️', '🍎', '🚗', '🚒', '🌹', '🍓', '🍅', '🥊', '🔴', '🎈', '🎒', '🌶️', '🍄', '🍷', '🍉', '🌺', '🎀', '🌶️', '🎠', '🚀'];
   yellowEmojis = ['💛', '🌼', '🐥', '🌻', '🌕', '🌟', '🌞', '🚕', '⭐', '🎗️', '🐝', '🎪', '🍋', '🍯', '🍌', '🍀', '🚜', '🔔', '🎡', '🐤'];
   greenEmojis = ['💚', '🌳', '🍀', '🌿', '🍏', '🐢', '🍐', '🐸', '🌵', '🌲', '🐉', '🍃', '🚛', '🚦', '🎄', '🐢', '🍈', '🎾', '🍈', '🍉'];
   purpleEmojis = ['💜', '🦄', '🎆', '🌂', '🎵', '🎸', '🍇', '🦑', '🍆', '🎼', 
    '🔮', '🎵', '🦔', '🌌', '🔮', '🌆', '🎹', '🌸', '🌈', '🎺'];
   blueEmojis = ['💙', '🌊', '🦋', '🌌', '🌠', '🎶', '🐳', '🐬', '🚙', '🔵', '🎨', '🚀', '🔷', '💦', '🐟', '🛵', '🎐', '🦋', '🦢', '🌈'];
   orangeEmojis = ['🧡', '🍊', '🦁', '🐅', '🐒', '🔥', '🌅', '🌇', '🚒', '🍁', '🎃', '🎑', '🌕', '🌥️', '🦊', '🚀', '🍂', '🔶', '🌞', '🎈'];
   pinkEmojis = ['💗', '🎀', '🌸', '💕', '🐷', '💘', '🌷', '🎈', '🎆', '🍇', '🎵', '🦄', '🎵', '🎶', '🌸', '🦢', '🎀', '🌸', '🎆', '🎈'];
   brownEmojis = ['🤎', '🦔', '🐕', '🦊', '🌰', '🦉', '🍫', '🍂', '🐻', '🌾', '🍯', '🏇', '🚙', '🎃', '🌰', '🦡', '🐕', '🐿️', '🦢', '🌲'];

  onShuffleClick(): void {
      this.selectedColor = getRandomHexColor();
      this.onColorChange(this.selectedColor);
    }

  showColorPicker() {
    this.showColorPickerFlag = true;
  }

  onColorChange(event: any) {
    console.log(event); // Check the event object in the browser's console
    if (event) {
      this.selectedColor = event;
    } else {
      console.error('Invalid color change event:', event);
    }
    console.log(getBasicColorFromHex(event));
    this.stringColor = getBasicColorFromHex(event);
    this.emojiList = getEmojisByColor(this.stringColor).join(' ');
    //this.showColorPickerFlag = false;    
  }

  getSelectedEmoji(){
    return this.emojiList;
  }
}

const getEmojisByColor = (color: any) => {
  switch (color) {
    case 'red':
      return ['❤️', '🍎', '🚗', '🚒', '🌹', '🍓', '🍅', '🥊', '🔴', '🎈', 
        '🎒', '🌶️', '🍄', '🍷', '🍉', '🌺', '🎀', '🌶️', '🎠', '🚀'];
    case 'green':
      return ['💚', '🌳', '🍀', '🌿', '🍏', '🐢', '🍐', '🐸', '🌵', '🌲', 
        '🐉', '🍃', '🚛', '🚦', '🎄', '🐢', '🍈', '🎾', '🍈', '🍉'];
    case 'yellow':
      return ['💛', '🌼', '🐥', '🌻', '🌕', '🌟', '🌞', '🚕', '⭐', '🎗️', 
        '🐝', '🎪', '🍋', '🍯', '🍌', '🍀', '🚜', '🔔', '🎡', '🐤'];
    case 'blue':
      return ['💙', '🌊', '🦋', '🌌', '🌠', '🎶', '🐳', '🐬', '🚙', '🔵', 
        '🎨', '🚀', '🔷', '💦', '🐟', '🛵', '🎐', '🦋', '🦢', '🌈'];
    case 'purple':
      return ['💜', '🦄', '🎆', '🌂', '🎵', '🎸', '🍇', '🦑', '🍆', '🎼', 
    '🔮', '🎵', '🦔', '🌌', '🔮', '🌆', '🎹', '🌸', '🌈', '🎺', '🍠'];
    case 'pink':
      return ['💗', '🎀', '💕', '🐷', '💘', '🌷', '🎈', '🎆', '🍇', 
        '🎵', '🦄', '🎵', '🎶', '🌸', '🦢', '🎀', '🎆', '🎈', '👚', 
        '👛', '🐽', '🏳️‍⚧️', '🐖'];
    case 'orange':
      return ['🧡', '🍊', '🦁', '🐅', '🐒', '🔥', '🌅', '🌇', '🚒', '🍁', 
        '🎃', '🎑', '🌕', '🌥️', '🦊', '🚀', '🍂', '🔶', '🌞', '🎈'];
    case 'white':
       return ['⚪', '◽', '🤍', '❕', '❔', '🏳', '🐶', '🕊', '🦷', '🥥', 
        '🐻‍❄️', '🦢', '🥼', '🦴'];
    case 'black':
      return ['⚫', '🖤', '◼', '◾', '✒', '🏴', '🐈‍⬛', '🏴‍☠️', '♣️', '🎬', '🚓', 
        '💂‍♀️'];
    case 'gray':
      return ['👽', '🐘', '🧦', '🦡', '🐰', '☕️', '🌚', '🐺', '🐨', '☑️', 
        '🐭', '🎬', '🚓', '🔍'];
    default:
      return [];
  }
};

function getBasicColorFromHex(hexValue: String) {
  // Convert the hex value to separate RGB components
  const red = parseInt(hexValue.substring(1, 3), 16);
  const green = parseInt(hexValue.substring(3, 5), 16);
  const blue = parseInt(hexValue.substring(5, 7), 16);

  console.log(red + ' ' + green + ' ' + blue + ' ');
  // Determine the basic color based on RGB values
  if (red > green && red > blue) {
    // Red is dominant
    if (blue > green) return 'pink'
    else if (green > 200) return 'yellow'
    else if (green > 150) return 'orange'
    else return 'red';
  } else if (green > red && green > blue) {
    // Green is dominant
    return 'green';
  } else if (blue > red && blue > green) {
    // Blue is dominant
    if (red > green) return 'purple'
    else return 'blue';
  } else if (red > 200 && green > 200 && blue < 110) {
    return 'yellow'
  } else if (red == 0 && green == 0 && blue == 0){
    return 'black';
  } else if (red > 230 && green > 230 && blue > 230){
    return 'white';
  } else if (red === green && green === blue) {
    // All components are equal (shades of gray)
    return 'gray';
  } else {
    // Determine color based on ranges of RGB components
    const sum = red + green + blue;
    const hue = (Math.acos((0.5 * (2 * red - green - blue)) / Math.sqrt((red - green) * (red - green) + (red - blue) * (green - blue))) * 180) / Math.PI;

    if (hue >= 0 && hue <= 30) {
      return 'red';
    } else if (hue > 30 && hue <= 90) {
      return 'yellow';
    } else if (hue > 90 && hue <= 150) {
      return 'green';
    } else if (hue > 150 && hue <= 210) {
      return 'cyan'; // A mix of green and blue
    } else if (hue > 210 && hue <= 270) {
      return 'blue';
    } else if (hue > 270 && hue <= 330) {
      return 'magenta'; // A mix of red and blue
    } else {
      return 'red'; // Handle cases near 360 degrees (back to red)
    }
  }
}


function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

