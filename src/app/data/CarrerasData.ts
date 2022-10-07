import { IDocumentData } from "../interfaces/Data.interface";

export const carrerasData:Array<IDocumentData> = [
    {
        id: 1,
        title: 'Carreras de caballos',
        content: `1)	Reglas generales de carreras de caballos<br><br>
              <ol type="a">
              <li>Todas las condiciones que aparecen en esta sección solo hacen referencia a las Carreras de caballos
              y tienen prioridad con respecto a cualquier otra regla o condición.</li><br>
              <li>Todas las apuestas se rigen por las Reglas de apuestas de Tattersalls que se describen en
              <a href="http://www.tattersallscommittee.co.uk/">http://www.tattersallscommittee.co.uk/</a>. Estas reglas
              regirán el establecimiento de apuestas en el caso de que se produzca un imprevisto que no esté cubierto
              por las reglas de esta sección.</li><br>
              <li>Las resoluciones se basarán en el resultado oficial emitido en el momento de "Peso". Cualquier cambio
              tras anunciar dicho resultado no se tomará en consideración. En caso de que se realice una petición de
              revisión en carreras celebradas en el Reino Unido, Irlanda o Sudáfrica donde el resultado inicial/orden de
              llegada sea corregido, [the Operator] establecerá los resultados según la regla "primero en superar el poste".
              Cualquier cambio posterior no será considerado como relevante para la resolución con la excepción de casos
              donde un caballo sea descalificado debido a falta de peso. En dichos casos, se toman en consideración los
              resultados tras el "Peso". En las carreras celebradas en otros países además de los mencionados anteriormente,
              contará el resultado oficial emitido en el momento del "Peso" (o procedimiento local equivalente).</li><br>
              <li>Cualquier apuesta, a excepción de las "Apuestas anticipadas (Ante Post), se considerará nula en el caso
              de que la carrera se suspenda o se declare nula. En el caso de que la carrera se aplace a una fecha futura y
              las "Declaraciones finales" sigan vigentes, todas las apuestas se considerarán válidas siempre que no se haya
              cambiado el lugar donde se celebrará la carrera. En dicho caso, todas las apuestas se declararán nulas. </li><br>
              <li>Para obtener más información sobre las horas de inicio publicadas junto a cualquier oferta de apuesta,
              consulta el horario oficial previsto de las carreras en tu hora local. A no ser que se especifique lo contrario
              en las Reglas de carreras de caballos, todas las apuestas serán válidas independientemente de los cambios que
              se produzcan en la hora de inicio de la carrera.</li><br>
              <li>En el caso que se produzca un error de salida en la carrera o cualquier otro suceso que provoque la repetición
              de la misma, no se considerará que los participantes de la carrera han estado "listos para la salida". En tal
              caso, las apuestas se reembolsarían si las selecciones no participaran en la nueva carrera. Las ganancias logradas
              en el resto de las selecciones estarían sujetas a la Regla 4 de Tattersalls. El número de corredores que participan
              en la nueva carrera establecerán los términos de "Posición". Sin embargo, se aplican las reglas generales de
              apuestas anticipadas (Ante Post).</li><br>
              <li>En el caso de que una carrera se declare "Nula" y se repita, todas las apuestas serán válidas para los caballos
              que participan en la nueva carrera. Los precios ofrecidos para una carrera "Nula" serán válidos para la nueva carrera
              a no ser que haya un no corredor, en cuyo caso todas las apuestas se establecerán según lo establecido en la Regla 4
              de Tattersalls.</li><br>
              <li>Las apuestas realizadas a caballos que se niegan a salir de los cajones de salida o se niegan a correr en una
              carrera National Hunt se basarán en el dictamen del juez de salida oficial. En el caso de que el juez de salida oficial
              considere al caballo como corredor, las apuestas relacionadas con dicho caballo se establecerán como apuestas perdidas.</li><br>
              <li>Una carrera se considera "Sin competencia" cuando solo participa un caballo en la carrera.</li><br>
              <li>Las carreras "Sin competencia" y nulas cuentan como carreras, pero cualquier selección implicada se tratará como
              caballo no corredor.</li>
              </ol>
              <br>
              2)	Apuestas a ganador y apuestas Each Way<br><br>
              <ol type="a">
              <li>Una apuesta "A ganador" es una única apuesta realizada en la selección elegida que solo se considerará como
              ganadora si el caballo elegido gana la carrera.</li><br>
              <li>Una apuesta "Each Way" (también conocida como EW) hace referencia a una apuesta donde la selección elegida
              debe ser una apuesta a ganador o una apuesta de posición según lo especificado en los términos de pago. La apuesta
              se divide en dos partes (la parte "A ganador" y la parte "Posición") de una apuesta similar: por tanto, una apuesta
              EW de 1 € costará un total de 2 €.</li><br>
              <li>Todas las apuestas "Each Way" se rigen por los términos de posición del precio inicial (SP). Por tanto, los
              términos de posición (1/4, 1/5 y número de posiciones pagadas) serán establecidos por el número de caballos "listos
              para la salida" y no por el número de corredores indicados cuando se realizó la apuesta. </li><br>
              <li>A continuación, veremos los términos de las apuestas "Each Way":</li><br>
              <li>Carreras hándicap:<br>
              De 2 a 4 corredores = Solo apuesta a ganador
              <ol type="i">
              <li>De 5 a 7 corredores = 1/4 de las cuotas a 1, 2</li>
              <li>De 8 a 11 corredores = 1/5 de las cuotas a 1, 2, 3</li>
              <li>De 12 a 15 corredores = 1/4 de las cuotas a 1, 2, 3</li>
              <li>A partir de 16 corredores = 1/4 de las cuotas a 1, 2, 3, 4</li>
              </ol>
              </li><br>
              <li>Carreras sin hándicap:<br>
              De 2 a 4 corredores = Solo apuesta a ganador
              <ol type="i">
              <li>De 5 a 7 corredores = 1/4 de las cuotas a 1, 2</li>
              <li>A partir de 8 corredores = 1/5 de las cuotas a 1, 2, 3</li>
              </ol>
              </li><br>
              <li>Todas las apuestas Each Way dobles, triples, etc. se establecen ganador-ganador, posición-posición.</li><br>
              <li>"Apostar sin" hace referencia a la posibilidad de apostar si un caballo en concreto podrá lograr una determinada
              posición finalista (ganador o posición) en el caso de que los caballos indicados se excluyan del cómputo de los
              resultados oficiales.</li><br>
              <li>Los términos de las apuestas "Each Way" para los mercados de "Apostar sin" se basarán en el número de corredores
              que participan realmente en la carrera después de que los caballos indicados se excluyan de la cantidad total o de
              los corredores.</li><br>
              <li>Las deducciones de la Regla 4 de Tattersalls se aplican en caso de caballos no corredores dentro de los mercados
              de "Apostar sin".</li>
              </ol>
              <br>
              3)	Precios: precio inicial, anticipado y de tablero<br><br>
              <ol type="a">
              <li>Es posible seleccionar entre dos (2) opciones de precio: el precio en el momento en el que se realiza la apuesta
              o el precio inicial (SP). El precio inicial (SP) hace referencia a las cuotas de la selección elegida al inicio de la
              carrera. En el caso de que se pueda apostar durante la carrera, el precio inicial (SP) se calculará según las últimas
              cuotas disponibles para la selección. Hay que tener en cuenta que el precio inicial (SP) no está disponible para las
              apuestas anticipadas (Ante Post) (AP).</li><br>
              <li>Los precios anticipados (EP) son las cuotas ofrecidas en el día del evento. Suelen ofrecerse entre las 8 y las 10
              a. m. del día del evento, hasta 15 minutos antes del inicio de la carrera. Puede haber casos (como, por ejemplo, las
              carreras de los sábados y eventos destacados) en los que una vez que se conocen las declaraciones finales, los precios
              anticipados (EP) se ofrecen en períodos de tiempo distintos a los mencionados anteriormente. </li><br>
              <li>Las alternativas a los precios iniciales (SP), precios de tablero (BP) o precios del sector (IP) suelen mostrarse
              aproximadamente 15 minutos antes de la carrera. </li><br>
              <li>Las apuestas, que no sean las realizadas a un precio inicial (SP), se establecerán según el precio indicado en el
              momento de realizar la apuesta y estarán sujetas a las otras reglas descritas en esta sección.</li><br>
              <li>Las apuestas realizadas a un precio anticipado (EP) y un precio de tablero (BP) se reembolsarán en el caso de que
              un caballo se retire cuando aún "no esté en la línea de salida". Las cuotas de caballos que participan en la misma
              carrera estarán sujetas a las deducciones de la Regla 4(c) de Tattersalls, según corresponda.</li><br>
              <li>En el caso de se produzca alguna retirada, se creará un nuevo mercado. Todas las apuestas realizadas a un precio
              anticipado (EP) o un precio de tablero (BP) antes de crear el nuevo mercado estarán sujetas a las deducciones de la
              Regla 4(c) de Tattersalls, según corresponda.</li><br>
              <li>Las apuestas se aceptan en carreras de dos (2) o más caballos corredores para las selecciones indicadas en los
              "Precios de tablero/evento" que el servicio de información oficial (PA) transmitió a nuestro servicio. </li><br>
              <li>En el caso de que se transmita un precio incorrecto, todas las apuestas realizadas en resultados con cuotas incorrectas
              se declararán nulas. </li><br>
              <li>En los casos en los que se aplique la Regla 4 de Tattersalls tras la retirada de un caballo, ya no podrán realizarse
              apuestas a un "Precio de tablero/evento", a no ser que se haya creado un nuevo mercado.</li><br>
              <li>Los caballos ofrecidos como apuestas de "Aumento de precio", "Invencibles", etc. también estarán sujetos a la deducción
              de la Regla 4 en el caso de que haya un no corredor en la carrera.</li><br>
              <li>Cualquier referencia a períodos, disponibilidad de precios, etc. se realiza a modo indicativo y no es vinculante. [the
              Operator] se reserva el derecho a modificar dichos períodos, precios de emisión, así como a suspender la disponibilidad de
              cualquier opción de apuesta o carrera según su exclusivo criterio.</li>
              </ol>
              <br>
              4)	Apuestas de favoritos sin nombre<br><br>
              <ol type="a">
              <li>El "Favorito sin nombre" (fav) y el "Segundo favorito sin nombre" (2fav) hacen referencia a selecciones que se determinan
              según lo siguiente:</li><br>
              <li>El caballo que se indica en el precio inicial (SP) con la cuota más baja se considerará como el "Favorito sin nombre".</li><br>
              <li>En el caso de que haya dos caballos con el mismo precio inicial (SP) y las cuotas más bajas, el caballo con el dorsal más
              bajo se considerará como "Favorito sin nombre".</li><br>
              <li>En el caso de que un caballo se retire "antes de la línea" de salida, pero siga siendo favorito según el precio inicial
              (SP), el caballo se tratará como no corredor.</li><br>
              <li>En el caso de que tenga lugar una carrera "Sin competencia", después de que el mercado se haya mostrado, todas las apuestas
              se declararán como nulas.</li>
              </ol>
              <br>
              `
    },
    {
        id: 2,
        title: 'Galgos',
        content: `
        <ol type="a">
        <li>
        Reglas generales de carreras de galgos
        <br><br>
        <ol>
        <li>
        Todas las condiciones que aparecen en esta sección solo hacen referencia a las Carreras de galgos y
        tienen prioridad con respecto a cualquier otra regla o condición.
        </li>
        <br>
        <li>
        BetPlay publicará las cuotas de todos los eventos cubiertos por BAGS <a href="http://www.bagsracing.com/">http://www.bagsracing.com/</a>.
        BetPlay se reserva el derecho a modificar dicha oferta añadiendo o eliminando eventos,
        independientemente de si las carreras que se añadan/eliminen estén cubiertas por BAGS.
        </li>
        <br>
        <li>
        Las apuestas se establecerán según el resultado oficial emitido por el juez. No se tendrán en cuenta los
        cambios realizados tras el anuncio de dicho resultado.
        </li>
        <br>
        <li>
        Cualquier apuesta, a excepción de las "Apuestas anticipadas” (Ante Post), se considerará nula en el
        caso de que la carrera se suspenda o se declare nula.
        </li>
        <br>
        <li>
        Para obtener más información sobre las horas de inicio publicadas junto a cualquier oferta de apuesta,
        consulta el horario oficial y previsto de las carreras en tu hora local. A no ser que se especifique lo
        contrario en las Reglas de carreras de galgos, todas las apuestas serán válidas independientemente de
        los cambios que se produzcan en la hora de inicio de la carrera.
        </li>
        <br>
        <li>
        En el caso de que una carrera se declare "Nula" y se repita, todas las apuestas serán válidas para los
        galgos que participan en la nueva carrera. Los precios ofrecidos para una carrera "Nula" serán válidos
        para la nueva carrera a no ser que haya un no corredor, en cuyo caso todas las apuestas se establecerán
        según lo establecido en la Regla 4 de Tattersalls.
        </li>
        </ol>
        </li>
        <br>
        <li>
        Apuestas a ganador y apuestas Each Way<br><br>
        <ol>
        <li>
        Una apuesta "A ganador" es una única apuesta realizada en la selección elegida que solo se considerará
        como ganadora si el galgo elegido gana la carrera.
        </li>
        <br>
        <li>
        Una apuesta "Each Way" (también conocida como EW) hace referencia a una apuesta donde la
        selección elegida debe ser una apuesta a ganador o una apuesta de posición según lo especificado en
        los términos de pago. La apuesta se divide en dos partes (la parte "A ganador" y la parte "Posición") de
        una apuesta similar. Por tanto, una apuesta EW de 1 € costará un total de 2 €.
        </li>
        <br>
        <li>
        Todas las apuestas "Each Way" se rigen por los términos de posición del precio inicial (SP). Por tanto,
        los términos de posición (1/4, 1/5 y número de posiciones pagadas) serán establecidos por el número
        de galgos que inician correctamente la carrera y no por el número de corredores indicados cuando se
        realizó la apuesta.
        </li>
        <br>
        <li>
        A continuación veremos los términos de las apuestas "Each Way":<br><br>
        <ol>
        De 2 a 4 corredores = Solo apuesta a ganador<br>
        De 5 a 6 corredores = 1/4 de las cuotas a 1, 2
        </ol>
        </li>
        <br>
        <li>
        Todas las apuestas a galgos corredores que no finalizan la carrera se considerarán como apuestas
        perdedoras.
        </li>
        <br>
        <li>
        En el caso de que el número de galgos que finalizan la carrera sea inferior al número de términos de
        posición indicados anteriormente, solo los corredores que lograron oficialmente uno de los tres
        primeros puestos serán tratados como selecciones ganadoras.
        </li>
        <br>
        <li>
        Todas las apuestas Each Way dobles, triples, etc. se establecen ganador-ganador, posición-posición.
        </li>
        <br>
        <li>
        Las apuestas Each Way también se aceptan en Favoritos sin nombre.
        </li>
        <br>
        <li>
        "Apostar sin" hace referencia a la posibilidad de apostar si un galgo en concreto podrá lograr la mejor
        posición finalista en el caso de que el galgo indicado se excluya del cómputo de los resultados
        oficiales.
        </li>
        <br>
        <li>
        Los términos de las apuestas "Each Way" para los mercados de "Apostar sin" se basarán en el número
        de corredores que participan realmente en la carrera después de que los galgos indicados se excluyan
        de la cantidad total o de los corredores.
        </li>
        <br>
        <li>
        Las deducciones de la Regla 4 de Tattersalls se aplican en caso de galgos no corredores dentro de los
        mercados de "Apostar sin".
        </li>
        <br>
        <li>
        En el caso de que un galgo no corra después de recibir las cuotas justo antes de comenzar la carrera, las
        apuestas realizadas en dicha selección se declararán nulas. Las apuestas a los corredores restantes
        estarán sujetas a la deducción de la Regla 4.
        </li>
        </ol>
        </li>
        <br>
        <li>
        Precios: precio inicial y de tablero<br><br>
        <ol>
        <li>
        Es posible seleccionar entre dos (2) opciones de precio: el precio en el momento en el que se realiza la
        apuesta o el precio inicial (SP). El precio inicial (SP) hace referencia a las cuotas de la selección
        elegida al inicio de la carrera. En el caso de que se pueda apostar durante la carrera, el precio inicial
        (SP) se calculará según las últimas cuotas disponibles para la selección. Hay que tener en cuenta que el
        precio inicial (SP) no está disponible para las apuestas anticipadas (Ante Post) (AP).
        </li>
        <br>
        <li>
        Las alternativas a los precios iniciales (SP), precios de tablero (BP) o precios del sector (IP) suelen
        mostrarse aproximadamente 5 minutos antes de la carrera. Las apuestas realizadas a un precio de
        tablero (BP), precio del sector (IP) o precio inicial (SP) se establecerán según el precio indicado en el
        momento de realizar la apuesta y estarán sujetas a las otras reglas descritas en esta sección.
        </li>
        <br>
        <li>
        Las apuestas se aceptan en carreras de dos (2) o más galgos corredores para las selecciones indicadas
        en los "Precios de tablero/evento" que el servicio de información oficial (PA) transmitió a nuestro
        servicio.
        </li>
        <br>
        <li>
        En el caso de que se transmita un precio incorrecto, todas las apuestas realizadas en resultados con
        cuotas incorrectas se declararán nulas y se reembolsarán.
        </li>
        <br>
        <li>
        Cualquier referencia a períodos, disponibilidad de precios, etc. se realiza a modo indicativo y no es
        vinculante. BetPlay se reserva el derecho a modificar dichos períodos, precios de emisión, así como a
        suspender la disponibilidad de cualquier opción de apuesta o carrera según su exclusivo criterio.
        </li>
        </ol>
        </li>
        <br>
        <li>
        Apuestas de favoritos sin nombre<br><br>
        <ol>
        <li>
        Las apuestas solo se aceptan por el "Favorito sin nombre". El "Favorito sin nombre" (fav) hace
        referencia a selecciones que se determinan según lo siguiente:
        <ol type="a">
        <br>
        <li>
        El galgo que se indica en el precio inicial (SP) en las cuotas más bajas se considerará como
        el "Favorito sin nombre".
        </li>
        <li>
        En el caso de que haya dos galgos con el mismo precio inicial (SP) y las menores cuotas, el
        galgo con el dorsal más bajo se considerará como "Favorito sin nombre".
        </li>
        </ol>
        </li>
        <br>
        <li>
        A no ser que se indique, en el caso de que una pista celebre más de un evento en el mismo día, la
        apuesta tendrá validez para el siguiente evento que se correrá una vez aceptada la apuesta.
        </li>
        </ol>
        </li>
        <br>
        <li>
        Regla 4 de Tattersalls
        <ol>
        <br>
        <li>
        La Regla de Tattersalls se aplica en aquellos casos en los que un galgo se retira o se considera que no
        ha participado oficialmente en la carrera según el dictamen del juez de salida.
        </li>
        <br>
        <li>
        La Regla 4 de Tattersalls deduce un valor establecido de apuestas ganadoras con el fin de compensar la
        retirada de un galgo en una determinada carrera. Las cuotas (Precio anticipado o de tablero/evento) que
        el galgo tiene en el momento de su retirada determinan la cantidad de la deducción.
        </li>
        <br>
        <li>
        Las deducciones de las cuotas del resto de galgos se basan en lo siguiente:<br><br>
        <table>
            <thead>
            <tr>
                <th>Cuotas decimales<br></th>
                <th>Cuotas&nbsp;fraccionarias</th>
                <th>Deducciones netas para el segundo puesto</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>&nbsp;1,12 o inferior</td>
                <td>&nbsp;1/9 o inferior</td>
                <td>&nbsp;90 %</td>
            </tr>
            <tr>
                <td>&nbsp;1,13 - 1,19</td>
                <td>&nbsp;1/8 - 2/11</td>
                <td>&nbsp;85 %</td>
            </tr>
            <tr>
                <td>&nbsp;1,20 - 1,27</td>
                <td>&nbsp;1/5 - ¼</td>
                <td>&nbsp;80 %</td>
            </tr>
            <tr>
                <td>&nbsp;1,28 - 1,33</td>
                <td>&nbsp;7/25 - 8/25</td>
                <td>&nbsp;75 %</td>
            </tr>
            <tr>
                <td>&nbsp;1,34 - 1,44</td>
                <td>&nbsp;1/3 - 11/25</td>
                <td>&nbsp;70 %</td>
            </tr>
            <tr>
                <td>&nbsp;1,45 - 1,57</td>
                <td>&nbsp;4/9 - 14/25</td>
                <td>&nbsp;65 %</td>
            </tr>
            <tr>
                <td>&nbsp;1,58 - 1,66</td>
                <td>&nbsp;4/7 - 13/20</td>
                <td>&nbsp;60 %</td>
            </tr>
            <tr>
                <td>&nbsp;1,67 - 1,83</td>
                <td>&nbsp;4/6 - 4/5</td>
                <td>&nbsp;55 %&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;1,84 - 1,99</td>
                <td>&nbsp;5/6 - 49 - 50</td>
                <td>&nbsp;50 %&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;2,00 - 2,24</td>
                <td>&nbsp;Impares - 31/25</td>
                <td>&nbsp;45 %</td>
            </tr>
            <tr>
                <td>&nbsp;2,25 - 2,59</td>
                <td>&nbsp;5/4 - 39/25</td>
                <td>&nbsp;40 %&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;2,60 - 2,79</td>
                <td>&nbsp;8/5 - 7/4</td>
                <td>&nbsp;35 %</td>
            </tr>
            <tr>
                <td>&nbsp;2,80 - 3,39</td>
                <td>&nbsp;9/5 - 23/10</td>
                <td>&nbsp;30 %</td>
            </tr>
            <tr>
                <td>&nbsp;3,40 - 4,19</td>
                <td>&nbsp;12/5 - 3/1</td>
                <td>&nbsp;25 %</td>
            </tr>
            <tr>
                <td>&nbsp;4,20 - 5,40</td>
                <td>&nbsp;16/5 - 22/5</td>
                <td>&nbsp;20 %</td>
            </tr>
            <tr>
                <td>&nbsp;5,50 - 6,99&nbsp;</td>
                <td>&nbsp;9/2 - 23/4</td>
                <td>&nbsp;15 %</td>
            </tr>
            <tr>
                <td>&nbsp;7,00 - 10,99</td>
                <td>&nbsp;6/1 - 9/1</td>
                <td>&nbsp;10 %</td>
            </tr>
            <tr>
                <td>&nbsp;11,00 y superior</td>
                <td>&nbsp;10/1 y superior</td>
                <td>&nbsp;Sin deducción</td>
            </tr>
            <tbody>
        </table>
        </li>
        <br>
        <li>
        Las tablas a las que se hace referencia anteriormente incluyen cuotas mostradas en formato decimal y fraccionario. En el caso de que las opciones decimales no tengan un equivalente fraccionario, BetPlay se reserva el derecho a aplicar las deducciones de la Regla 4 de Tattersalls basadas en la tabla decimal.
        </li>
        <br>
        <li>
        Las carreras en las que se retiren más de un galgo estarán sujetas a una deducción máxima de 90c por 1€.
        </li>
        </ol>
        </li>
        <br>
        <li>
        Apuestas anticipadas (Ante Post)<br><br>
        <ol>
        <li>
        Para que una apuesta se considere una apuesta anticipada (AP), debe realizarse antes de las declaraciones finales de la carrera.
        </li>
        <br>
        <li>
        Las apuestas anticipadas (AP) realizadas en galgos que no participan en la carrera no se reembolsarán y la Regla 4 de Tattersalls no se aplica, a no ser que se indique específicamente.
        </li>
        <br>
        <li>
        En el caso de que se produzca al menos uno de los siguientes sucesos, todas las apuestas anticipadas (AP) se declararán nulas:<br>
        <br>
        <ol type="a">
        <li>
        La carrera seabandona;
        </li>
        <li>
        La carrera se declara oficialmente nula;
        </li>
        <li>
        Las condiciones de la carrera se modifican tras haber realizado las apuestas (tal y como se establece en las Reglas de Tattersalls).
        </li>
        </ol>
        </li>
        <br>
        <li>
        Además de las posibilidades indicadas anteriormente, todas las apuestas anticipadas (AP) se considerarán válidas siempre que la carrera, a la que hace referencia la apuesta, se corra en el plazo de 14 días completos desde la fecha prevista inicialmente, a no ser que se haya llegado a otro acuerdo.
        </li>
        <br>
        <li>
        Las apuestas AP se establecen al precio y términos de lugar aplicables en el momento de la aceptación. Si una apuesta es aceptada con las cuotas o términos de posición incorrectos, [el Operador] se reserva el derecho, a su propia discreción de establecer la apuesta como nulas y se reembolsará la apuesta.
        </li>
        </ol>
        </li>
        <br>
        <li>
        Apuestas de pronóstico y tricast<br><br>
        <ol>
        1. Apuestas de pronóstico y tricast: reglas generales<br>
        a. Los pronósticos están permitidos en carreras con 3 o más corredores. Las apuestas realizadas en carreras en la que participen menos corredores se declararán nulas.<br>
        b. Las apuestas tricast están permitidas en carreras en las que se declara un dividendo de apuesta tricast oficial a través de un ordenador.<br>
        c. En el caso de que no se declare ningún dividendo, las apuestas se considerarán como un pronóstico generado por un ordenador de las selecciones elegidas para finalizar en primer y segundo lugar, sin incluir el tercer puesto.<br>
        d. Las apuestas de pronóstico se establecerán según los resultados del pronóstico del precio inicial (SP) generado por un ordenador. En el caso de que, por cualquier motivo, no se obtengan resultados del precio inicial (SP) del pronóstico, las apuestas se considerarán nulas.<br>
        e. Las apuestas de resultados siempre deben ser nombradas. No se aceptan apuestas sobre favoritos sin nombrar y si estas apuestas se aceptan por error, serán anuladas.<br>
        f. Las apuestas se reembolsarán en el caso de apuestas de pronóstico y tricast en las que está implicado un no corredor.<br><br>
        2. Pronóstico exacto<br>
        En un pronóstico exacto es posible apostar por el orden exacto de finalización de los galgos que logren el primer y segundo puesto de una carrera.<br><br>
        3. Pronóstico inverso<br>
        En un pronóstico inverso es posible apostar por los galgos que logren el primer y segundo lugar de una carrera, sin importar el orden de finalización. El coste de esta apuesta duplica el coste de un pronóstico exacto, ya que dicha apuesta puede considerarse como 2 apuestas de pronóstico exacto.<br><br>
        4. Pronóstico combinado<br>
        En un pronóstico combinado es posible elegir 3 o más selecciones de una carrera en concreto. Para que la apuesta se considere ganadora, 2 de los galgos seleccionados deben finalizar en primer y segundo lugar, sin importar el orden.<br><br>
        5. Apuesta tricast<br>
        En una apuesta tricast es posible apostar por el orden exacto de finalización de los galgos que logren el primer, segundo y tercer puesto de una carrera.<br><br>
        6. Tricast combinada<br>
        En una apuesta tricast combinada es posible apostar por los galgos que logren el primer, segundo y tercer puesto de una carrera, sin importar el orden de finalización.
        </ol>
        </li>
        <br>
        <li>
        Apuestas de distancia<br><br>
        <ol>
        1. Reglas generales (aplicables a todas las apuestas de distancia)<br>
        a. Los resultados de las apuestas de distancia ganadora se considerarán como la distancia oficial entre los galgos que hayan cruzado la línea de meta en primer y segundo puesto, y que hayan finalizado la carrera.<br>
        b. En las "Apuestas de distancia" se aplica la siguiente terminología<br>
        <ul>
        o "Nariz" = 0,05 de un cuerpo<br>
        o "Cabeza escasa" = 0,1 de un cuerpo<br>
        o "Cabeza" = 0,2 de un cuerpo<br>
        o "Cuello" = 0,3 de un cuerpo<br>
        o "Medio cuerpo" = 0,5 de un cuerpo<br>
        o "Tres cuartos" = 0,75 de un cuerpo<br>
        </ul>
        c. La cantidad máxima de "cuerpos" de cada carrera es de 12.<br><br>
        2. Apuestas de distancia "ganadora del evento"<br>
        a. En las apuestas de distancia "ganadora del evento" es posible apostar por el total de distancias ganadoras de un determinado evento.<br>
        b. En el caso de que un evento incluya una o más carreras que se suspendan o se declaren nulas, todas las apuestas de este mercado se declararán nulas. Dicha condición estará vigente a no ser que todas las ofertas que se hayan decidido antes de la suspensión y posiblemente no puedan modificarse independientemente de los eventos futuros permitan establecer dichos mercados. En este caso, las apuestas se establecerán según el resultado decidido.<br>
        d. BetPlay, según su exclusivo criterio, se reserva el derecho a ofrecer apuestas relacionadas con un cantidad específica de eventos en un período/día indicados. En el caso de que alguno de los eventos indicados incluya 1 o más carreras que se suspenden o se declaran nulas, todas las<br>
        apuestas de este mercado se declararán nulas. Dicha condición estará vigente a no ser que todas las ofertas que se hayan decidido antes de la suspensión y posiblemente no puedan modificarse independientemente de los eventos futuros permitan establecer dichos mercados. En este caso, las apuestas se establecerán según el resultado decidido.<br>
        <br>
        3. Apuestas de distancia "ganadora de la carrera"<br>
        a. En las apuestas de distancia "ganadora de la carrera" es posible apostar por la distancia ganadora de una determinada carrera.<br>
        b. En el caso de que no se declare ningún resultado oficial, todas las apuestas de este mercado se declararán nulas.<br><br>
        4. Apuestas de distancia "ganadora del galgo"<br>
        a. En las apuestas de distancia "ganadora del galgo" es posible apostar que un galgo en concreto gane una carrera específica por una distancia específica.<br>
        b. En el caso de que no se declare ningún resultado oficial, todas las apuestas de este mercado se declararán nulas.<br>
        c. En el caso de que el galgo elegido no gane la carrera, todas las apuestas de este mercado se establecerán como apuestas perdedoras.<br>
        </ol>
        </li>
        <br>
        <li>
        Ganancias máximas<br><br>
        <ol>
        <li>
        Aunque pueden producirse casos en los que las ganancias potenciales de las apuestas aceptadas superen las ganancias máximas permitidas, el pago neto final seguirá limitado a los límites indicados a continuación.<br>
        </li>
        <br>
        <li>
        El límite de 25 000 € se aplicará a carreras que están cubiertas por un servicio de información oficial completo (por ejemplo: PA). Las cantidades indicadas anteriormente se considerarán como las cantidades netas máximas que pueden ganarse en un solo día. Es decir, se considera un solo día al número total de carreras que comiencen entre las 00:00 CET y las 23:59 CET.<br>
        </li>
        </ol>
        </li>
        <br>
        <li>
        Trap Challenge<br><br>
        <ol>
        <li>
        El “Trap Challenge” (Desafío de la Trampa) es cuando se puede apostar en la trampa con el mayor número de galgos ganadores en una reunión y/o en un número determinado de carreras.<br>
        </li>
        <br>
        <li>
        Todas las apuestas refiriéndose al "Trap Challenge" se mantienen independientemente de las trampas vacantes, la "reserva" o carreras canceladas asumiendo que al menos la mitad de las carreras programadas se llevó a cabo y se publicaron sus resultados.<br>
        </li>
        <br>
        <li>
        Para el establecimiento de las apuestas del "Trap Challenge", si dos o más galgos son considerados ganadores de una carrera, todos los galgos en 1er sitio (y sus respectivas trampas) serán considerados como ganadores de la carrera especificada.<br>
        </li>
        <br>
        <li>
        Si dos o más trampas comparten posiciones finales, el establecimiento de las apuestas se basa en la regla de "Dead Heat" tal como se define en el (Seccion B, Para 5.14).<br>
        </li>
        <br>
        <li>
        Las apuestas relacionadas con la Racing Post Greyhound TV (RPGTV) Flying Four Selections serán declaradas nulas si alguna de las carreras es declarada como nula, a menos que el resultado ya se haya determinado. Cualquier "Dead Heat" sobre el primer puesto también será considerado como ganador.
        </li>
        </ol>
        </li>
        </ol>
        </p>`
    }
];
