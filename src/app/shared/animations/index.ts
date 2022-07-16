import { animate, state, style, transition, trigger } from '@angular/animations'

const flyInOutLeft = trigger('flyInOutLeft', [
  state(
    'in',
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(200px)'
    }),
    animate('300ms ease-out')
  ]),
  transition(':leave', [
    animate(
      '500ms ease-out',
      style({
        opacity: 0,
        transform: 'translateX(200px)'
      })
    )
  ])
])

export { flyInOutLeft }
