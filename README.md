# Universidad de Guadalajara - Centro Universitario de Ciencias Exactas e Ingenierias
## Departamento de ciencias computacionales
Computacion Tolerante a fallas - Seccion D06

Profesor: *Lopez Franco Michel Emanuel*

Alumno: *Lomeli Flores Jesus Isaac*

## Restaurar el estado de ejecucion

### Introduccion

<p align="justify">
  Cuando se desea crear un sistema tolerante a fallas se deben tomar en cuenta un sin número de posibles situaciones que podrían ocasionar que el sistema falle y para evitarlo es necesario tomar medidas preventivas, sin embargo, siempre habrá algo que no se tomó en cuenta cuando se diseñó el sistema, lo que desembocara una falla. Cuando se da el caso que el sistema falle irremediablemente, como puede ser por causa de falta de energía eléctrica, se deben tomar medidas para recuperar los sistemas realizando respaldos.
En esta práctica se pretende que el alumno desarrolle un software que pueda recuperar el estado de un sistema antes de ser interrumpido para, de esta manera, no perder la información con la que se estuviera trabajando.
</p>


</div>

### Desarrollo

<p align="justify">
Para la realización de esta practica se utilizo React.js y la persistencia de los datos de estado de ejecución se logro utilizando el localstorage.
Lo primero que se hizo fue crear un formulario simple del cual se deberian de persistir los datos de ejecución. Dicho formulario describe la estructura del objeto que se muestra en las lineas de código debajo de este texto.

</p>


```js
const [datosPrograma, setDatosPrograma] = useState(
    {
      id: "",
      nombreProgramador: "",
      tiempo: "",
      operacion: "suma"
    }
  );
```


<p align="justify">
Para guardar la información de los campos del formulario era necesario detectar los cambios que el usuario fuera realizando a estos, por lo cual fue necesario la implementacion de una funcion que se dedicara a
"escuchar" los cambios en los campos y almacenarlos en el objeto creado. Una vez que se modifican los atributos correspondientes del objeto, estos eran enviados al localstorage para persistirlos en caso de la pestaña fuese cerrada.
</p>


```js
const handleCampo = (event) => {
    setDatosPrograma({
    ...datosPrograma,
      [event.target.name]: event.target.value
    });
    localStorage.setItem(event.target.name, event.target.value);
    console.log(datosPrograma);
  }
```


<p align="justify">
Finalmente, una vez que se reabriera la pestaña del navegador o se recargara, lo primero que el programa realiza es obtener los datos del localstorage para almacenarlos en el objeto creado, en caso de que no existan datos en el localstorage
el objeto simplemente permanecera con los datos del constructor, caso contrario, mostrara los datos recuperados en los campos correspondientes, persistiendo de esta manera los datos de la ejecución anterior.
</p>


```js
useEffect(() => {
    setDatosPrograma({
      id: localStorage.getItem('id'),
      nombreProgramador: localStorage.getItem('nombreProgramador'),
      tiempo: localStorage.getItem('tiempo'),
      operacion: localStorage.getItem('operacion')
    });
  }, [])
```

### Conclusion

<p align="justify">
Se logró comprender la importancia de la persistencia de los datos de sesiones o ejecuciones anteriores de un sistema pues, a pesar de simplicidad del ejemplo desarrollado, esto resulta muy útil para cualquier situación, desde un alumno que realiza un examen en linea y pierde la conexión a internet, a un sistema que realice transferecias bancarias.
</p>
