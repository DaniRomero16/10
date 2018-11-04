let altavozFrontal = new Altavoz(true,50);
let altavozLateralIzquierdo = new Altavoz(true,20);
let altavozLateralDerecho = new Altavoz(true,30);
let altavozTraseroIzquierdo = new Altavoz(true,10);
let altavozTraseroDerecho = new Altavoz(false,0);


for (let i=0; i<5;i++){
altavozLateralIzquierdo.subirVolumen();
}

altavozLateralIzquierdo.print();

altavozTraseroDerecho.encender();


altavozTraseroDerecho.establecerVolumen(35);

altavozFrontal.apagar();
altavozLateralIzquierdo.apagar();
altavozLateralDerecho.apagar();
altavozTraseroIzquierdo.apagar();
altavozTraseroDerecho.apagar();

