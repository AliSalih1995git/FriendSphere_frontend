import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.css'],
})
export class EmojiPickerComponent implements OnInit {
  @Input() user!: any;
  @Output() dataFromEmojicomp = new EventEmitter<{
    textArea: string;
    selectedBackground: string | null;
  }>();

  isEmojiPickerVisible: boolean = false;
  textArea: string = '';
  selectedBackground: string | null = null;
  constructor() {}

  ngOnInit(): void {}

  emojiPickerVisible() {
    this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
  }
  emitData() {
    console.log(this.textArea, this.selectedBackground);

    this.dataFromEmojicomp.emit({
      textArea: this.textArea,
      selectedBackground: this.selectedBackground,
    });
  }
  addEmoji(event: any) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.emitData();
  }

  setBackground(backgroundUrl: string) {
    this.selectedBackground = backgroundUrl;
    this.emitData();
  }

  removeBackground() {
    this.selectedBackground = null;
    this.emitData();
  }

  // Background images from the assets folder
  postBackgrounds: string[] = [
    '../../../../assets/postBackgrounds/1.jpg',
    '../../../../assets/postBackgrounds/2.jpg',
    '../../../../assets/postBackgrounds/3.jpg',
    '../../../../assets/postBackgrounds/4.jpg',
    '../../../../assets/postBackgrounds/5.jpg',
    '../../../../assets/postBackgrounds/6.jpg',
    '../../../../assets/postBackgrounds/7.jpg',
    '../../../../assets/postBackgrounds/8.jpg',
    '../../../../assets/postBackgrounds/9.jpg',
    '../../../../assets/postBackgrounds/10.jpg',
  ];
}
