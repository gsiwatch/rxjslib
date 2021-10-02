import { interval, take }  from 'rxjs';

// declare 
const numbers$ = interval(1000);

const takeFourNumbers$ = numbers$.pipe(take(4));

takeFourNumbers$.subscribe(x => console.log('Next: ', x));
