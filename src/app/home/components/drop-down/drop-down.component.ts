import {
  Component,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { createPopper, Instance, Placement } from '@popperjs/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements OnInit, AfterViewInit {
  dropdownPopoverShow = false;

  @ViewChild('btnDropdownRef', { static: false })
  btnDropdownRef!: ElementRef<any>;
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef!: ElementRef<any>;
  @Output() setShowUserMenu: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  private popperInstance: Instance | null = null;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initializePopper();
  }

  private initializePopper() {
    if (this.btnDropdownRef && this.popoverDropdownRef) {
      if (this.popperInstance) {
        this.popperInstance.destroy();
      }
      this.popperInstance = createPopper(
        this.btnDropdownRef.nativeElement,
        this.popoverDropdownRef.nativeElement,
        {
          placement: 'bottom-start' as Placement,
        }
      );
    }
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
    this.setShowUserMenu.emit(this.dropdownPopoverShow);
  }
}
