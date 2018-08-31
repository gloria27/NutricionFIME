import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios-pierna',
  templateUrl: './ejercicios-pierna.component.html',
  styleUrls: ['./ejercicios-pierna.component.css']
})
export class EjerciciosPiernaComponent implements OnInit {

  ejercicios: any[] = [
    {
      nombre: "Sentadilla clásica",
      descripcion: "- Paso 1: Antes de iniciar cualquier movimiento hay que posicionar correctamente el cuerpo. Debes pararte con los pies separados a la distancia de los hombros y con los brazos colgando a ambos lados del tronco." +

        "- Paso 2: Luego debes contraer ligeramente el abdomen para que al iniciar el movimiento cuidemos la columna lumbar." +

        "- Paso 3: Debes hacer el gesto que haces cuando te sientas. El movimiento entonces es siempre hacia atrás y comienza desde la pelvis NUNCA desde las rodillas.>" +

        "- Paso 4: Durante la ejecución del movimiento las rodillas nunca deben sobrepasar la punta de los pies y además no deben abrirse ni juntarse. La idea es “tocar” el piso imaginario y volver a subir." +

        "- Paso 5: La profundidad o ángulo de flexión de la rodilla depende del objetivo, es decir con un ángulo de flexión aproximado de 120 grados. La velocidad también varía según los objetivos; aunque yo recomiendo una velocidad media e incluso lenta.",
      imagen: "../assets/images/sentadilla-clasica.jpeg"
    },
    {
      nombre: "Sentadilla clásica",
      descripcion: "Paso 1: Antes de iniciar cualquier movimiento hay que posicionar correctamente el cuerpo. Debes pararte con los pies separados a la distancia de los hombros y con los brazos colgando a ambos lados del tronco." +

        "- Paso 2: Luego debes contraer ligeramente el abdomen para que al iniciar el movimiento cuidemos la columna lumbar." +

        " - Paso 3: Debes hacer el gesto que haces cuando te sientas. El movimiento entonces es siempre hacia atrás y comienza desde la pelvis NUNCA desde las rodillas." +

        " - Paso 4: Durante la ejecución del movimiento las rodillas nunca deben sobrepasar la punta de los pies y además no deben abrirse ni juntarse. La idea es “tocar” el piso imaginario y volver a subir." +

        " - Paso 5: La profundidad o ángulo de flexión de la rodilla depende del objetivo, es decir con un ángulo de flexión aproximado de 120 grados. La velocidad también varía según los objetivos; aunque yo recomiendo una velocidad media e incluso lenta.",
      imagen: "../assets/images/sentadilla-clasica.jpeg"
    },
    {
      nombre: "Sentadilla clásica",
      descripcion: "Paso 1: Antes de iniciar cualquier movimiento hay que posicionar correctamente el cuerpo. Debes pararte con los pies separados a la distancia de los hombros y con los brazos colgando a ambos lados del tronco." +

        "- Paso 2: Luego debes contraer ligeramente el abdomen para que al iniciar el movimiento cuidemos la columna lumbar." +

        " - Paso 3: Debes hacer el gesto que haces cuando te sientas. El movimiento entonces es siempre hacia atrás y comienza desde la pelvis NUNCA desde las rodillas." +

        " - Paso 4: Durante la ejecución del movimiento las rodillas nunca deben sobrepasar la punta de los pies y además no deben abrirse ni juntarse. La idea es “tocar” el piso imaginario y volver a subir." +

        " - Paso 5: La profundidad o ángulo de flexión de la rodilla depende del objetivo, es decir con un ángulo de flexión aproximado de 120 grados. La velocidad también varía según los objetivos; aunque yo recomiendo una velocidad media e incluso lenta.",
      imagen: "../assets/images/sentadilla-clasica.jpeg"
    },
    {
      nombre: "Sentadilla clásica",
      descripcion: "Paso 1: Antes de iniciar cualquier movimiento hay que posicionar correctamente el cuerpo. Debes pararte con los pies separados a la distancia de los hombros y con los brazos colgando a ambos lados del tronco." +

        "- Paso 2: Luego debes contraer ligeramente el abdomen para que al iniciar el movimiento cuidemos la columna lumbar." +

        " - Paso 3: Debes hacer el gesto que haces cuando te sientas. El movimiento entonces es siempre hacia atrás y comienza desde la pelvis NUNCA desde las rodillas." +

        " - Paso 4: Durante la ejecución del movimiento las rodillas nunca deben sobrepasar la punta de los pies y además no deben abrirse ni juntarse. La idea es “tocar” el piso imaginario y volver a subir." +

        " - Paso 5: La profundidad o ángulo de flexión de la rodilla depende del objetivo, es decir con un ángulo de flexión aproximado de 120 grados. La velocidad también varía según los objetivos; aunque yo recomiendo una velocidad media e incluso lenta.",
      imagen: "../assets/images/sentadilla-clasica.jpeg"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
