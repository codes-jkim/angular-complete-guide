import { AfterViewInit, Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('Current status:', this.currentStatus());
    })

  }

  ngOnInit() {
    console.log('ngOnInit');
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
