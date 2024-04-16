import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: " + value),
  error: (error) => console.warn("error: " + error),
  complete: () => console.info("complete"),
};

const obs$ = new Observable<string>((Subs) => {
  Subs.next("Hola Mundo!");

  //forzar error
  const a = undefined;
  a.name = 12;

  Subs.complete();
});

obs$.subscribe(
  (Subs) => console.log("next: " + Subs),
  (error) => console.warn("error: " + error),
  () => console.log("complete")
);

//console.log("Hola Mundo!");
