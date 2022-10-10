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
              5)	Regla 4 de Tattersalls<br><br>
              <ol type="a">
              <li>La Regla 4 de Tattersalls se aplica a aquellos casos en los que un caballo se retira antes de la línea de salida
              o se considera que no ha participado oficialmente en la carrera según el dictamen del juez de salida.</li><br>
              <li>La Regla 4 de Tattersalls deduce un valor establecido de las apuestas ganadoras con el fin de compensar por la
              retirada de un caballo en una determinada carrera. Las cuotas (Precio anticipado o de tablero/evento) que el caballo
              tiene en el momento de su retirada determinan la cantidad de la deducción.</li><br>
              <li>Las deducciones de las cuotas del resto de caballos se basan en lo siguiente:<br><br>
              <div class="varias-tablas">
              <table>
              <thead>
              <tr>
              <th>Cuotas decimales&nbsp;</th>
              <th>Cuotas fraccionarias&nbsp;</th>
              <th>Deducciones netas&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>1,12 o inferior</td>
              <td>1/9 o inferior</td>
              <td>90 %</td>
              </tr>
              <tr>
              <td>1,13 - 1,19</td>
              <td>1/8 - 2/11</td>
              <td>85 %</td>
              </tr>
              <tr>
              <td>1,20 - 1,27</td>
              <td>1/5 - ¼</td>
              <td>80 %</td>
              </tr>
              <tr>
              <td>1,28 - 1,33	</td>
              <td>7/25 - 8/25	</td>
              <td>75 %</td>
              </tr>
              <tr>
              <td>1,34 - 1,44</td>
              <td>1/3 - 11/25</td>
              <td>70 %</td>
              </tr>
              <tr>
              <td>1,45 - 1,57</td>
              <td>4/9 - 14/25</td>
              <td>65 %</td>
              </tr>
              <tr>
              <td>1,58 - 1,66</td>
              <td>4/7 - 13/20</td>
              <td>60 %</td>
              </tr>
              <tr>
              <td>1,67 - 1,83</td>
              <td>4/6 - 4/5</td>
              <td>55 %</td>
              </tr>
              <tr>
              <td>1,84 - 1,99</td>
              <td>5/6 - 49 - 50</td>
              <td>50 %</td>
              </tr>
              <tr>
              <td>2,00 - 2,24</td>
              <td>Impares - 31/25</td>
              <td>45 %</td>
              </tr>
              <tr>
              <td>2,25 - 2,59</td>
              <td>5/4 - 39/25</td>
              <td>40 %</td>
              </tr>
              <tr>
              <td>2,60 - 2,79</td>
              <td>8/5 - 7/4</td>
              <td>35 %</td>
              </tr>
              <tr>
              <td>2,80 - 3,39</td>
              <td>9/5 - 23/10</td>
              <td>30 %</td>
              </tr>
              <tr>
              <td>3,40 - 4,19</td>
              <td>12/5 - 3/1</td>
              <td>25 %</td>
              </tr>
              <tr>
              <td>4,20 - 5,40</td>
              <td>16/5 - 22/5</td>
              <td>20 %</td>
              </tr>
              <tr>
              <td>5,50 - 6,99</td>
              <td>9/2 - 23/4</td>
              <td>15 %</td>
              </tr>
              <tr>
              <td>7,00 - 10,99</td>
              <td>6/1 - 9/1</td>
              <td>10 %</td>
              </tr>
              <tr>
              <td>11,00 y superior</td>
              <td>10/1 y superior</td>
              <td>Sin deducción</td>
              </tr>
              </tbody>
              </table>
              </div>
              </li><br>
              <li>Las tablas a las que se hace referencia anteriormente incluyen cuotas mostradas en formato decimal y fraccionario.
              En el caso de que las opciones decimales no tengan un equivalente fraccionario, [the Operator] se reserva el derecho a
              aplicar las deducciones de la Regla 4 de Tattersalls basadas en la tabla decimal.</li><br>
              <li>La aplicación de la Regla 4 de Tattersalls a las apuestas realizadas en el precio inicial (EP) se basará en el precio
              inicial (EP) del caballo retirado en el momento en que se realizó la apuesta, independientemente de las cuotas en el
              momento de la retirada del caballo.</li><br>
              <li>Las carreras en las que se retiren más de un caballo estarán sujetas a una deducción máxima de 90c por 1 €.</li><br>
              <li>Si la deducción total del mercado en el que se coloca la apuesta es 5c de €, y se retira solo un caballo, la
              deducción será cancelada como una concesión. Sin embargo, si dos o más caballos se retiran, se aplicará la regla 4 de
              deducción acumulada.</li>
              </ol>
              <br>
              6)	Apuestas anticipadas (Ante Post)<br><br>
              <ol type="a">
              <li>Para que una apuesta se considere como apuesta anticipada (AP), debe realizarse antes de la fase de declaración
              nocturna. Por lo general, dicha declaración tiene validez 48 horas antes del inicio de las carreras de caballos sin
              obstáculos y del inicio de las carreras National Hunt.</li><br>
              <li>Las apuestas anticipadas (AP) realizadas en caballos que no participan en la carrera no se reembolsarán y la Regla
              4 de Tattersalls no se aplica, a no ser que se indique específicamente.</li><br>
              <li>En el caso de que se produzca al menos uno de los siguientes sucesos, todas las apuestas anticipadas (AP) se
              declararán nulas:<br><br>
              <ol type="i">
              <li>La carrera se abandona;</li>
              <li>La carrera se declara oficialmente nula;</li>
              <li>Las condiciones de la carrera se modifican tras haber realizado las apuestas (tal y como se establece en las
              Reglas de Tattersalls);</li>
              <li>Un caballo se elimina por votación según las Reglas de carreras del club de jinetes;</li>
              <li>El lugar o la superficie de la pista se han visto modificados (por ejemplo, Césped y barro/Cancelación de todos los
              eventos por condiciones meteorológicas, o viceversa);</li>
              <li>El plazo de inscripción a la carrera se ha vuelto a abrir.</li>
              </ol>
              </li><br>
              <li>Además de las posibilidades indicadas anteriormente, todas las apuestas anticipadas (AP) se considerarán válidas
              siempre que la carrera, a la que hace referencia la apuesta, se corra en el plazo de 14 días completos desde la fecha
              prevista inicialmente, a no ser que se haya llegado a otro acuerdo.<br>
              Estas condiciones incluyen que la carrera se ocurre en la misma pista, cubriendo la misma distancia y que la carrera
              no se vuelve a abrir a nuevos participantes. Si la carrera aplazada no cumple uno de los criterios mencionados anteriormente,
              todas las apuestas anticipadas (AP) se establecerán como anuladas.</li><br>
              <li>Las apuestas anticipadas (AP) se establecen en los términos de posición y precios aplicables al momento de aceptación.
              En el caso de que se acepte una apuesta en las cuotas o términos de Posición incorrectos, [the Operator] se reserva el
              derecho, según su exclusivo criterio, a declarar nula la apuesta y las apuestas se reembolsarán.</li>
              </ol>
              <br>
              7)	Apuestas de pronóstico y de tricast <br><br>
              <ol>
              <li><strong>Apuestas de pronóstico y tricast: reglas generales</strong><br>
              a. Los pronósticos están permitidos en carreras con 3 o más corredores.<br>
              b. Las apuestas tricast están permitidas en carreras en las que se declara un dividendo de apuesta tricast oficial a través
              de un ordenador.<br>
              c. En el caso de que no se declare ningún dividendo, las apuestas se considerarán como un pronóstico generado por un ordenador
              de las selecciones elegidas para finalizar en primer y segundo lugar, sin incluir el tercer puesto.<br>
              d. Las apuestas de pronóstico se establecerán según los resultados del pronóstico del precio inicial (SP) generado por un
              ordenador. En el caso de que, por cualquier motivo, no se obtengan resultados del precio inicial (SP) del pronóstico, las
              apuestas se considerarán nulas.<br>
              e. Las apuestas de pronóstico siempre deben tener un nombre. No se aceptarán apuestas a favoritos sin nombre y en el caso de
              que se realicen por error, estas se anularán.<br>
              f. Las apuestas se anularán en el caso de apuestas de pronóstico y tricasts en las que está implicado un no corredor.
              </li><br>
              <li><strong>Pronóstico exacto</strong><br>
              En un pronóstico exacto es posible apostar por el orden exacto de finalización de los caballos que logren el primer y segundo
              puesto de una carrera. </li><br>
              <li><strong>Pronóstico inverso</strong><br>
              En un pronóstico inverso es posible apostar por los caballos que logren el primer y segundo puesto de una carrera, sin importar
              el orden de finalización. El coste de esta apuesta es el doble del coste de un pronóstico exacto, ya que dicha apuesta puede
              considerarse como 2 apuestas de pronóstico exacto.</li><br>
              <li><strong>Pronóstico combinado</strong><br>
              En un pronóstico combinado es posible elegir 3 o más selecciones de una carrera en concreto. Para que la apuesta se considere
              ganadora, 2 de los caballos seleccionados deben finalizar en primer y segundo lugar, sin importar el orden. </li><br>
              <li><strong>Apuesta tricast</strong><br>
              En una apuesta tricast es posible apostar por el orden exacto de finalización de los caballos que logren el primer, segundo y
              tercer puesto de una carrera. </li><br>
              <li><strong>Apuesta tricast combinada</strong><br>
              En una apuesta tricast combinada es posible apostar por los caballos que logren el primer, segundo y tercer puesto de una
              carrera, sin importar el orden de finalización.</li>
              </ol>
              <br>
              8)	Apuesta de "Solo posición"<br><br>
              [the Operator] se reserva el derecho a ofrecer un mercado de "Solo posición" en determinadas carreras. Dichas apuestas se
              establecerían de la misma forma que la parte "Posición" de una apuesta "Each Way".<br><br>
              <ol type="a">
              <li>En el caso de que un caballo se retire antes de la línea de salida, todas las apuestas relacionadas con dicho caballo
              se reembolsarán. Se aplicarán las deducciones según las tablas de la Regla 4. Estas deducciones se basarán en el precio de
              "Solo posición" en el momento de la retirada y se aplicarán al mercado de "Solo posición".</li><br>
              <li>El número de posiciones pagadas se determinará por las declaraciones del día de la carrera. En el caso de que los números
              de posiciones se reduzcan debido a una reducción en el número de corredores, en las apuestas de "Solo posición" el número de
              posiciones pagadas será el mismo. Sin embargo, en el caso de que el número de corredores sea igual o inferior al número de
              posiciones que se ofrecen, las apuestas de este mercado se declararán nulas y las apuestas se reembolsarán. </li><br>
              <li>Las deducciones de las cuotas del resto de caballos se basan en lo siguiente:
              <div class="varias-tablas">
              <table>
              <thead>
              <tr>
              <th>Cuotas decimales</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>1,12 o inferior</td>
              </tr>
              <tr>
              <td>1,13 - 1,19</td>
              </tr>
              <tr>
              <td>1,20 - 1,27</td>
              </tr>
              <tr>
              <td>1,28 - 1,33</td>
              </tr>
              <tr>
              <td>1,34 - 1,44</td>
              </tr>
              <tr>
              <td>1,45 - 1,57</td>
              </tr>
              <tr>
              <td>1,58 - 1,66</td>
              </tr>
              <tr>
              <td>1,67 - 1,83</td>
              </tr>
              <tr>
              <td>1,84 - 1,99</td>
              </tr>
              <tr>
              <td>2,00 - 2,24</td>
              </tr>
              <tr>
              <td>2,25 - 2,59</td>
              </tr>
              <tr>
              <td>2,60 - 2,79</td>
              </tr>
              <tr>
              <td>2,80 - 3,39</td>
              </tr>
              <tr>
              <td>3,40 - 4,19</td>
              </tr>
              <tr>
              <td>4,20 - 5,19</td>
              </tr>
              <tr>
              <td>5,20 y superior</td>
              </tr>
              </tbody>
              </table>
              <table>
              <thead>
              <tr>
              <th>Cuotas fraccionarias</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>1/9 o inferior</td>
              </tr>
              <tr>
              <td>1/8 - 2/11</td>
              </tr>
              <tr>
              <td>1/5 - 1/4</td>
              </tr>
              <tr>
              <td>7/25 - 8/25</td>
              </tr>
              <tr>
              <td>1/3 - 11/25</td>
              </tr>
              <tr>
              <td>4/9 - 14/25</td>
              </tr>
              <tr>
              <td>4/7 - 13/20</td>
              </tr>
              <tr>
              <td>4/6 - 4/5</td>
              </tr>
              <tr>
              <td>5/6 - 49/50</td>
              </tr>
              <tr>
              <td>Impares - 31/25</td>
              </tr>
              <tr>
              <td>5/4 - 39/25</td>
              </tr>
              <tr>
              <td>8/5 - 7/4</td>
              </tr>
              <tr>
              <td>9/5 - 23/10</td>
              </tr>
              <tr>
              <td>12/5 - 3/1</td>
              </tr>
              <tr>
              <td>16/5 - 4/1</td>
              </tr>
              <tr>
              <td>21/5 y superior</td>
              </tr>
              </tbody>
              </table>
              <table>
              <thead>
              <tr>
              <th>Deducciones<br> netas para el <br>segundo <br>puesto</th>
              <th>Deducciones <br>netas para el <br>tercer <br>puesto	</th>
              <th>Deducciones <br>netas para el <br>cuarto puesto <br>(o más)</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>45 %	</td>
              <td>30 %	</td>
              <td>20 %</td>
              </tr>
              <tr>
              <td>40 %	</td>
              <td>30 %	</td>
              <td>20 %</td>
              </tr>
              <tr>
              <td>40 %	</td>
              <td>25 %	</td>
              <td>20 %</td>
              </tr>
              <tr>
              <td>35 %	</td>
              <td>25 %	</td>
              <td>20 %</td>
              </tr>
              <tr>
              <td>35 %	</td>
              <td>25 %	</td>
              <td>15 %</td>
              </tr>
              <tr>
              <td>30 %	</td>
              <td>20 %	</td>
              <td>15 %</td>
              </tr>
              <tr>
              <td>30 %	</td>
              <td>20 %	</td>
              <td>15 %</td>
              </tr>
              <tr>
              <td>25 %	</td>
              <td>20 %	</td>
              <td>15 %</td>
              </tr>
              <tr>
              <td>25 %	</td>
              <td>15 %	</td>
              <td>10 %</td>
              </tr>
              <tr>
              <td>20 %	</td>
              <td>15 %	</td>
              <td>10 %</td>
              </tr>
              <tr>
              <td>20 %	</td>
              <td>15 %	</td>
              <td>10 %</td>
              </tr>
              <tr>
              <td>15 %	</td>
              <td>10 %	</td>
              <td>10 %</td>
              </tr>
              <tr>
              <td>15 %	</td>
              <td>10 %	</td>
              <td>0 %</td>
              </tr>
              <tr>
              <td>10 %	</td>
              <td>10 %	</td>
              <td>0 %</td>
              </tr>
              <tr>
              <td>10 %	</td>
              <td>0 %	</td>
              <td>0 %</td>
              </tr>
              <tr>
              <td>Sin deducción	</td>
              <td>Sin deducción	</td>
              <td>Sin deducción</td>
              </tr>
              </tbody>
              </table>
              </div>
              </li><br>
              <li>Las tablas a las que se hace referencia anteriormente incluyen cuotas mostradas en formato decimal y fraccionario.
              En el caso de que las opciones decimales no tengan un equivalente fraccionario, [the Operator] se reserva el derecho a
              aplicar las 4 deducciones basadas en la tabla decimal.</li>
              </ol>
              <br>
              9)	Apuestas especiales<br><br>
              <ol>
              <li><strong>Apuestas especiales de jinetes</strong><br>
              En las Apuestas especiales de jinetes es posible apostar por un determinado jinete que monte caballos que ganen o logren
              el primer, segundo y tercer puesto en una cantidad determinada de carreras de un evento específico, según corresponda.<br><br>
              a. En el caso de que un jinete que está previsto que monte 3 veces como máximo y tenga al menos 1 caballo no corredor, el
              mercado de Apuestas múltiples de jinetes se declarará nulo. Dicha condición estará en vigor a no ser que las ofertas
              pudieran establecerse sin importar el resultado de la carrera en la que está involucrado el caballo no corredor. En este
              caso, las apuestas se establecerán según el resultado decidido.<br>
              b. Los mercados de Apuestas múltiples de jinetes que tienen previsto montar al menos 4 veces seguirán siendo válidos a
              no ser que el jinete tenga 2 o más caballos no corredores. En tal caso, las apuestas de este mercado se declararán nulas.
              Dicha condición estará en vigor a no ser que las ofertas pudieran establecerse sin importar el resultado de la carrera en
              la que está involucrado el caballo no corredor. En este caso, las apuestas se establecerán según el resultado decidido.<br>
              c. Los mercados de "Posición" se establecerán según los términos de Posición aplicables a cada carrera.<br>
              d. Las cuotas de otras Apuestas especiales de jinetes, a excepción de la "Apuesta múltiple de jinetes", exigirán que el
              jinete gane (o logre el primer, segundo o tercer puesto, según corresponda) todas las carreras indicadas.<br>
              e. En el caso de no corredores en las Apuestas especiales de jinetes de determinadas carreras, las apuestas se declararán
              nulas.<br>
              f. El "Jinete Especial" (Jockey Special) se basará en la montura reservada del jinete. Si un jinete consigue monturas
              adicionales en una reunión, no se tendrán en cuenta para el pago de la apuesta.<br>
              </li><br>
              <li><strong>Apuestas especiales combinadas de jinetes</strong><br>
              En las Apuestas especiales combinadas de jinetes es posible apostar por dos jinetes que deben ir a lomos de caballos que
              ganen o logren el primer, segundo o tercer puesto en una cantidad determinada de carreras de un evento específico, según
              corresponda.<br><br>
              a. En el caso de que uno o más de los eventos no finalicen, las apuestas se declararán nulas. Dicha condición estará
              vigente a no ser que todas las ofertas que se hayan decidido antes de la suspensión y posiblemente no puedan modificarse
              independientemente de los eventos futuros permitan establecer dichos mercados. En este caso, las apuestas se establecerán
              según el resultado decidido.<br>
              b. Se aplican las reglas de Apuestas especiales de jinetes.<br>
              </li><br>
              <li><strong>Apuestas especiales de preparadores</strong><br>
              En las Apuestas especiales de preparadores es posible apostar por un preparador cuyos caballos ganen o logren el primer,
              segundo o tercer puesto en una cantidad determinada de carreras de un evento específico, según corresponda.<br><br>
              a. Se aplican las reglas de Apuestas especiales de jinetes.<br>
              </li><br>
              <li><strong>Apuestas de distancia: reglas generales (aplicables a todas las apuestas de distancia)</strong><br>
              a. Los resultados de las apuestas de distancia ganadora se considerarán como la distancia oficial entre los caballos que
              hayan cruzado la meta en primer y segundo lugar, siempre que hayan seguido la ruta correcta y llevado el peso correcto.<br>
              b. En las "Apuestas de distancia" se aplica la siguiente terminología:<br>
              <ul>
              <li>"Nariz" = 0,05 de un cuerpo</li>
              <li>"Cabeza escasa" = 0,1 de un cuerpo</li>
              <li>"Cabeza" = 0,2 de un cuerpo</li>
              <li>"Cuello" = 0,3 de un cuerpo</li>
              <li>"Medio cuerpo" = 0,5 de un cuerpo</li>
              <li>"Tres cuartos" = 0,75 de un cuerpo</li>
              </ul>
              c. La cantidad máxima de "cuerpos" de cada carrera es de 12 cuerpos para carreras de caballos sin obstáculos y 30 cuerpos
              para carreras National Hunt Racing.<br>
              </li><br>
              <li><strong>Apuestas de distancia "ganadora del evento"</strong><br>
              a. En las apuestas de distancia "ganadora del evento" es posible apostar por el total de distancias ganadoras de un
              determinado evento.<br>
              b. En el caso de que tenga lugar una carrera "Sin competencia", o en el caso de que no se declare ningún resultado oficial
              (por ejemplo: todos los caballos no logran competir), la siguiente cantidad de cuerpos se añadirá al total: 5 cuerpos para
              carreras de caballos sin obstáculos y 12 cuerpos para carreras National Hunt Racing.<br>
              c. En el caso de que un evento incluya una o más carreras que se suspenden o se declaren nulas, todas las apuestas de este
              mercado se declararán nulas. Dicha condición estará vigente a no ser que todas las ofertas que se hayan decidido antes de la
              suspensión y posiblemente no puedan modificarse independientemente de los eventos futuros permitan establecer dichos mercados.
              En este caso, las apuestas se establecerán según el resultado decidido.<br>
              d. [the Operator], según su exclusivo criterio, se reserva el derecho a ofrecer apuestas relacionadas con una cantidad
              específica de eventos en un período/día indicados. En el caso de que alguno de los eventos indicados incluya 1 o más carreras
              que se suspenden o se declaran nulas, todas las apuestas de este mercado se declararán nulas. Dicha condición estará vigente
              a no ser que todas las ofertas que se hayan decidido antes de la suspensión y posiblemente no puedan modificarse
              independientemente de los eventos futuros permitan establecer dichos mercados. En este caso, las apuestas se establecerán
              según el resultado decidido.<br>
              </li><br>
              <li><strong>Apuestas de distancia "ganadora de la carrera"</strong><br>
              a. En las apuestas de distancia "ganadora de la carrera" es posible apostar por la distancia ganadora de una determinada
              carrera.<br>
              b. En el caso de que tenga lugar una carrera "Sin competencia", o en el caso de que no se declare ningún resultado oficial
              (por ejemplo: todos los caballos no logran competir), todas las apuestas de este mercado se declararán nulas.<br>
              </li><br>
              <li><strong>Apuestas de distancia "ganadora del caballo"</strong><br>
              a. En las apuestas de distancia "ganadora del caballo" es posible apostar si un caballo en concreto ganará una determinada
              carrera por una distancia específica.<br>
              b. En el caso de que tenga lugar una carrera "Sin competencia" o que el caballo no corra, todas las apuestas de este mercado
              se declararán nulas.<br>
              c. En el caso de que el caballo elegido no gane la carrera, todas las apuestas de este mercado se establecerán como apuestas
              perdedoras.<br>
              </li><br>
              <li><strong>Carreras de caballos combinadas con otros deportes</strong><br>
              a. Según el criterio exclusivo de [the Operator], podría decidirse ofrecer combinaciones predefinidas entre carreras de
              caballos y otros deportes.<br>
              b. A no ser que se especifique lo contrario, las combinaciones incluirán un caballo que gane una determinada carrera junto
              con un equipo/atleta(s) que ganen un determinado partido.<br>
              c. En el caso de que alguno de los caballos elegidos no corra, las apuestas se declararán nulas.<br>
              d. A no ser que indique específicamente, las reglas de establecimiento descritas en la <Section B, para 5> se aplican en el
              caso de eventos deportivos (no carreras de caballos) suspendidos o aplazados.<br>
              </li><br>
              <li><strong>Mercados especiales de TV</strong><br>
              a. Todos los mercados especiales de TV solo hacen referencia a las carreras que se transmitan en directo en la televisión
              británica terrestre.<br>
              b. A no ser que se indique específicamente de forma conjunta con la oferta de apuesta, se aplican las reglas generales de
              carreras de caballos.<br>
              </li><br>
              <li><strong>Apuestas especiales anticipadas (Ante Post)</strong><br>
              a. Según el criterio exclusivo de [the Operator] una variedad de mercados, similares, pero no limitados a las "Apuestas
              especiales diarias", pueden ofrecerse según las carreras anticipadas a largo plazo.<br>
              b. A no ser que se indique específicamente de forma conjunta con la oferta de apuesta, se aplican las reglas generales de
              apuestas anticipadas.<br>
              </li><br>
              <li><strong>Match Bet</strong><br>
              a. Apuestas que se realizan por cuál de los caballos indicados tendrá la mejor posición de finalización al final de la carrera
              o tras un período definido previamente.<br>
              b. Todos los mercados se establecerán según el resultado oficial.<br>
              c. En el caso de que ninguno de los caballos indicados logre finalizar la carrera, todas las apuestas del mercado se
              declararán nulas.<br>
              d. En el caso de que al menos uno (1) de los caballos indicados no corra, todas las apuestas se declararán nulas.<br>
              </li><br>
              <li><strong>Apuestas de "Favoritos diarios"</strong><br>
              a. Los Favoritos diarios hacen referencia a la posibilidad de apostar si un número especificado de Favoritos serán ganadores o
              lograrán el primer, segundo o tercer puesto (según corresponda) de un evento indicado.<br>
              b. Los mercados que hacen referencia a los Favoritos de "Posición" se establecerán según los términos de "Posición" de la
              correspondiente carrera del evento.<br>
              c. En el caso de que haya más de 1 caballo con el mismo precio inicial (SP) y las menores cuotas, el caballo con el dorsal
              más bajo se considerará como "Favorito". En el caso de que el "Favorito" indicado se retire y el mercado no se reinicie, el
              segundo caballo con el número de dorsal más bajo se considerará como "Favorito".<br>
              d. En los casos en los que haya 4 corredores o menos, el "Favorito" debe ganar la carrera para ganar la apuesta de "Posición"
              (llegar entre los primeros tres puestos).<br>
              e. En el caso de que no se realicen una o más carreras, las apuestas de estos mercados se declararán nulas. Dicha condición
              estará vigente a no ser que todas las ofertas que se hayan decidido antes de la suspensión y posiblemente no puedan modificarse
              independientemente de los eventos futuros permitan establecer dichos mercados. En este caso, las apuestas se establecerán
              según el resultado decidido.<br>
              </li><br>
              <li><strong>Apuestas "múltiples diarias"</strong><br>
              a. En las Apuestas múltiples diarias se puede apostar si los favoritos/caballos indicados ganarán o lograrán el primer, segundo
              o tercer puesto en sus respectivas carreras, según corresponda.<br>
              b. Las apuestas múltiples de posición se establecerán según los términos de "Posición" de la correspondiente carrera del evento.<br>
              c. En el caso de que alguno de los caballos elegidos no corra, todas las apuestas se declararán nulas.
              </li>
              </ol>
              <br>
              10)	Caballos de reserva<br><br>
              <ol>
              <li>En las carreras en las que los caballos de reserva sustituirán a los que no corren, [the Operator] se reserva el
              derecho, según su criterio exclusivo, a presentar precios anticipados para los caballos de reserva.</li><br>
              <li>Las cuotas realizadas en los caballos de reserva que corren la carrera se utilizarán para compensar las deducciones
              de la Regla 4 de Tattersalls que se aplicaría a los caballos no corredores.</li><br>
              <li>No se aplicará ninguna deducción de la Regla 4 de Tattersalls a caballos de reserva que tengan precios anticipados
              disponibles y que finalmente se conviertan en caballos no corredores. Dicha condición no se aplica en los casos en los que
              tras superar la fase de declaración de pista (45 minutos antes del inicio previsto de la carrera) un caballo de reserva
              ocupa el lugar de un caballo retirado y, por tanto, se considera un corredor oficial. Tras la fecha límite anteriormente
              mencionada, en el caso de que el caballo de reserva se retire, se aplicarán las deducciones de la Regla 4 de Tattersalls.</li>
              </ol>
              <br>
              11)	Carreras Internacionales <br><br>
              <ol>
              <li>Esta sección se refiere a las carreras que se ocurre fuera de Gran Bretaña e Irlanda. En los casos en que estas normas
              no sean claras y/o incierto, el reglamento se basa en las reglas de la otra sección de carreras de caballos.</li><br>
              <li>Todas las carreras se arreglan según los resultados oficiales emitidos por las autoridades locales de las carreras de
              caballos en el día de la carrera, incluidos los cambios realizados después de la investigación y las posibles objeciones de
              los delegados. El establecimiento de las apuestas también tiene en cuenta las reglas adicionales aplicados por el comité de
              la autoridad/entidad local correspondiente.</li><br>
              <li>Si el precio de la industria (SP) está disponible, las apuestas se establecerán de acuerdo con estos precios, excepto
              las apuestas teniendo precios temprana (Early Price- EP) . En este caso se establecerán de acuerdo con las apuestas EP. En
              los casos en que el SP de la industria no está disponible, las apuestas se establecerán según las cuotas del Pari-Mutuel/Tote.</li>
              </ol>
              <br>
              12) Carreras en los EEUU<br><br>
              <ol type="a">
              <li>Esta sección se refiere a las carreras que se ocurre en los EEUU. En los casos en que estas normas no sean claras y/o
              incierto, el reglamento se basa en las reglas de la otra sección de carreras de caballos.</li><br>
              <li>Todas las carreras se resuelven atendiendo al resultado oficial emitido por la Autoridad hípica local el día de la carrera,
              incluidas las enmiendas realizadas tras las posibles investigaciones y objeciones. Cualquier enmienda del resultado oficial,
              incluidos cambios en fechas posteriores, no se tendrán en consideración.</li><br>
              <li>Las apuestas realizadas a precio de Inicio de carrera (SP) se resolverán atendiendo a esos precios. Las apuestas a precio
              tempranero (EP) se resolverán atendiendo a dichos precios. En casos en los que no existe un SP disponible, las apuestas de
              Inicio de carrera se resolverán atendiendo al último EP disponible antes del comienzo de la carrera. Si no hubiere EP disponible,
              las apuestas de Inicio de carrera se resolverán en conformidad con las probabilidades US Pari-Mutuel/Tote.</li><br>
              <li>Si no se devolviesen precios SP de la industria, no se obtuviesen EP y/o US Pari-Mutuel/Tote no declarasen dividendos, se
              considerará la apuesta como nula.</li><br>
              <li>Se resolverán todas las apuestas de carreras en los EE. UU según el nombre del caballo únicamente, sin considerar parejas
              como criterio de resolución. Consecuentemente, si varios caballos corriesen con el mismo número, se considerará la apuesta
              atendiendo al nombre del caballo seleccionado y no incluirá otras selecciones coincidentes con el mismo número.</li><br>
              <li>Las apuestas Each Way se resolverán ateniendo a los términos y condiciones de dichas apuestas en el Reino Unido e Irlanda,
              aplicando los SP o EP correspondientes.</li><br>
              <li>Se aplicará cuando sea necesario la regla 4, aplicándose las deducciones con los mismos términos que se aplican en las
              carreras en el Reino Unido e Irlanda.</li><br>
              <li>Las apuestas se considerarán como válidas en caso de carreras fuera de hierba y/o en caso de que carreras previstas sobre
              hierba se celebrasen sobre arena o superficie AW.</li><br>
              <li>Se resolverán las apuestas forecast y tricast según los dividendos de la industria. En caso de que un hubiera dividendos,
              se tendrán en consideración los dividendos locales de US Pari-Mutuel/Tote.</li><br>
              </ol>`
    },
    {
        id: 2,
        title: 'Galgos',
        content: `1.	Reglas generales de carreras de galgos<br><br>
              <ol type="a">
              <li>Todas las condiciones que aparecen en esta sección solo hacen referencia a las Carreras de galgos y tienen prioridad
              con respecto a cualquier otra regla o condición.</li><br>
              <li>[the Operator] publicará las cuotas de todos los eventos cubiertos por BAGS (Bookmakers Afternoon Greyhound Service)
              [the Operator] se reserva el derecho a modificar dicha oferta añadiendo o eliminando eventos, independientemente de si
              las carreras que se añadan/eliminen estén cubiertas por BAGS.</li><br>
              <li>Las apuestas se establecerán según el resultado oficial emitido por el juez. No se tendrán en cuenta los cambios
              realizados tras el anuncio de dicho resultado.</li><br>
              <li>Cualquier apuesta, a excepción de las "Apuestas anticipadas" (Ante Post), se considerará nula en el caso de que la
              carrera se suspenda o se declare nula. </li><br>
              <li>Para obtener más información sobre las horas de inicio publicadas junto a cualquier oferta de apuesta, consulta el
              horario oficial y previsto de las carreras en tu hora local. A no ser que se especifique lo contrario en las Reglas de
              carreras de galgos, todas las apuestas serán válidas independientemente de los cambios que se produzcan en la hora de
              inicio de la carrera.</li><br>
              <li>En el caso de que una carrera se declare "Nula" y se repita, todas las apuestas serán válidas para los galgos que
              participan en la nueva carrera. Los precios ofrecidos para una carrera "Nula" serán válidos para la nueva carrera a no
              ser que haya un no corredor, en cuyo caso todas las apuestas se establecerán según lo establecido en la Regla 4 de
              Tattersalls.</li>
              </ol>
              <br>
              2.	Apuestas a ganador y apuestas Each Way<br><br>
              <ol type="a">
              <li>Una apuesta "A ganador" es una única apuesta realizada en la selección elegida que solo se considerará como ganadora
              si el galgo elegido gana la carrera.</li><br>
              <li>Una apuesta "Each Way" (también conocida como EW) hace referencia a una apuesta donde la selección elegida debe ser
              una apuesta a ganador o una apuesta de posición según lo especificado en los términos de pago. La apuesta se divide en
              dos partes (la parte "A ganador" y la parte "Posición") de una apuesta similar. Por tanto, una apuesta EW de 1 € costará
              un total de 2 €.</li><br>
              <li>Todas las apuestas "Each Way" se rigen por los términos de posición del precio inicial (SP). Por tanto, los términos
              de posición (1/4, 1/5 y número de posiciones pagadas) serán establecidos por el número de galgos que inician correctamente
              la carrera y no por el número de corredores indicados cuando se realizó la apuesta. </li><br>
              <li>A continuación, veremos los términos de las apuestas "Each Way":<br><br>
              <ol type="i">
              <li>De 2 a 4 corredores = Solo apuesta a ganador</li>
              <li>De 5 a 6 corredores = 1/4 de las cuotas a 1, 2</li>
              </ol>
              </li><br>
              <li>Todas las apuestas a galgos corredores que no finalizan la carrera se considerarán como apuestas perdedoras.</li><br>
              <li>En el caso de que el número de galgos que finalizan la carrera sea inferior al número de términos de posición indicados
              anteriormente, solo los corredores que lograron oficialmente uno de los tres primeros puestos será tratado como selecciones
              ganadoras.</li><br>
              <li>Todas las apuestas Each Way dobles, triples, etc. se establecen ganador-ganador, posición-posición.</li><br>
              <li>Las apuestas Each Way también se aceptan en Favoritos sin nombre.</li><br>
              <li>"Apostar sin" hace referencia a la posibilidad de apostar si un galgo en concreto podrá lograr la mejor posición finalista
              en el caso de que el galgo indicado se excluya del cómputo de los resultados oficiales.</li><br>
              <li>Los términos de las apuestas "Each Way" para los mercados de "Apostar sin" se basarán en el número de corredores que
              participan realmente en la carrera después de que los galgos indicados se excluyan de la cantidad total o de los corredores.</li><br>
              <li>Las deducciones de la Regla 4 de Tattersalls se aplican en caso de galgos no corredores dentro de los mercados de "Apostar
              sin".</li><br>
              <li>En el caso de que un galgo no corra después de recibir las cuotas justo antes de comenzar la carrera, las apuestas realizadas
              en dicha selección se declararán nulas. Las apuestas a los corredores restantes estarán sujetas a la deducción de la Regla 4.</li><br>
              </ol>
              <br>
              3.	Precios: precio inicial y de tablero<br><br>
              <ol type="a">
              <li>Es posible seleccionar entre dos (2) opciones de precio: el precio en el momento en el que se realiza la apuesta o el precio
              inicial (SP). El precio inicial (SP) hace referencia a las cuotas de la selección elegida al inicio de la carrera. En el caso de
              que se pueda apostar durante la carrera, el precio inicial (SP) se calculará según las últimas cuotas disponibles para la selección.
              Hay que tener en cuenta que el precio inicial (SP) no está disponible para las apuestas anticipadas (Ante Post) (AP).</li><br>
              <li>Las alternativas a los precios iniciales (SP), precios de tablero (BP) o precios del sector (IP) suelen mostrarse aproximadamente
              5 minutos antes de la carrera. Las apuestas realizadas a un precio de tablero (BP), precio del sector (IP) o precio inicial (SP)
              se establecerán según el precio indicado en el momento de realizar la apuesta y estarán sujetas a las otras reglas descritas en
              esta sección.</li><br>
              <li>Las apuestas se aceptan en carreras de dos (2) o más galgos corredores para las selecciones indicadas en los "Precios de
              tablero/evento" que el servicio de información oficial (PA) transmitió a nuestro servicio.</li><br>
              <li>En el caso de que se transmita un precio incorrecto, todas las apuestas realizadas en resultados con cuotas incorrectas se
              declararán nulas y se reembolsarán. </li><br>
              <li>Cualquier referencia a períodos, disponibilidad de precios, etc. se realiza a modo indicativo y no es vinculante. [the Operator]
              se reserva el derecho a modificar dichos períodos, precios de emisión, así como a suspender la disponibilidad de cualquier opción
              de apuesta o carrera según su exclusivo criterio.</li>
              </ol>
              <br>
              4.	Apuestas de favoritos sin nombre<br><br>
              <ol type="a">
              <li>Las apuestas solo se aceptan por el "Favorito sin nombre". El "Favorito sin nombre" (fav) hace referencia a selecciones que
              se determinan según lo siguiente:<br>
              El galgo que se indica en el precio inicial (SP) en las cuotas más bajas se considerará como el "Favorito sin nombre".</li><br>
              <li>En el caso de que haya dos galgos con el mismo precio inicial (SP) y las cuotas más bajas, el galgo con el dorsal más bajo se
              considerará como "Favorito sin nombre".</li><br>
              <li>A no ser que se indique, en el caso de que una pista celebre más de un evento en el mismo día, la apuesta tendrá validez
              para el siguiente evento que se correrá una vez aceptada la apuesta.</li>
              </ol>
              <br>
              5.	Regla 4 de Tattersalls<br><br>
              <ol>
              <li>La Regla de Tattersalls se aplica en aquellos casos en los que un galgo se retira o se considera que no ha participado
              oficialmente en la carrera según el dictamen del juez de salida.</li><br>
              <li>La Regla 4 de Tattersalls deduce un valor establecido de apuestas ganadoras con el fin de compensar la retirada de un galgo
              en una determinada carrera. Las cuotas (Precio anticipado o de tablero/evento) que el galgo tiene en el momento de su retirada
              determinan la cantidad de la deducción.</li><br>
              <li>Las deducciones de las cuotas del resto de galgos se basan en lo siguiente:<br><br>
              <div class="varias-tablas">
              <table>
              <thead>
              <tr>
              <th>Cuotas decimales&nbsp;</th>
              <th>Cuotas fraccionarias&nbsp;</th>
              <th>Deducciones netas</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>1,12 o inferior</td>
              <td>1/9 o inferior</td>
              <td>90 %</td>
              </tr>
              <tr>
              <td>1,13 - 1,19</td>
              <td>1/8 - 2/11</td>
              <td>85 %</td>
              </tr>
              <tr>
              <td>1,20 - 1,27</td>
              <td>1/5 - 1/4</td>
              <td>80 %</td>
              </tr>
              <tr>
              <td>1,28 - 1,33</td>
              <td>7/25 - 8/25</td>
              <td>75 %</td>
              </tr>
              <tr>
              <td>1,34 - 1,44</td>
              <td>1/3 - 11/25</td>
              <td>70 %</td>
              </tr>
              <tr>
              <td>1,45 - 1,57</td>
              <td>4/9 - 14/25</td>
              <td>65 %</td>
              </tr>
              <tr>
              <td>1,58 - 1,66</td>
              <td>4/7 - 13/20</td>
              <td>60 %</td>
              </tr>
              <tr>
              <td>1,67 - 1,83</td>
              <td>4/6 - 4/5</td>
              <td>55 %</td>
              </tr>
              <tr>
              <td>1,84 - 1,99</td>
              <td>5/6 - 49 - 50</td>
              <td>50 %</td>
              </tr>
              <tr>
              <td>2,00 - 2,24</td>
              <td>Impares - 31/25</td>
              <td>45 %</td>
              </tr>
              <tr>
              <td>2,25 - 2,59</td>
              <td>5/4 - 39/25</td>
              <td>40 %</td>
              </tr>
              <tr>
              <td>2,60 - 2,79</td>
              <td>8/5 - 7/4</td>
              <td>35 %</td>
              </tr>
              <tr>
              <td>2,80 - 3,39</td>
              <td>9/5 - 23/10</td>
              <td>30 %</td>
              </tr>
              <tr>
              <td>3,40 - 4,19</td>
              <td>12/5 - 3/1</td>
              <td>25 %</td>
              </tr>
              <tr>
              <td>4,20 - 5,40</td>
              <td>16/5 - 22/5</td>
              <td>20 %</td>
              </tr>
              <tr>
              <td>5,50 - 6,99</td>
              <td>9/2 - 23/4</td>
              <td>15 %</td>
              </tr>
              <tr>
              <td>7,00 - 10,99</td>
              <td>6/1 - 9/1</td>
              <td>10 %</td>
              </tr>
              <tr>
              <td>11,00 y superior</td>
              <td>10/1 y superior</td>
              <td>Sin deducción</td>
              </tr>
              </tbody>
              </table>
              </div>
              </li><br>
              <li>Las tablas a las que se hace referencia anteriormente incluyen cuotas mostradas en formato decimal y fraccionario. En
              el caso de que las opciones decimales no tengan un equivalente fraccionario, [the Operator] se reserva el derecho a aplicar
              las deducciones de la Regla 4 de Tattersalls basadas en la tabla decimal.</li><br>
              <li>Las carreras en las que se retiren más de un galgo estarán sujetas a una deducción máxima de 90c por 1 €.</li>
              </ol>
              <br>
              6.	Apuestas anticipadas (Ante Post)<br><br>
              <ol>
              <li>Para que una apuesta se considere una apuesta anticipada (AP), debe realizarse antes de las declaraciones finales
              de la carrera.</li><br>
              <li>Las apuestas anticipadas (AP) realizadas en galgos que no participan en la carrera no se reembolsarán y la Regla
              4 de Tattersalls no se aplica, a no ser que se indique específicamente.</li><br>
              <li>En el caso de que se produzca al menos uno de los siguientes sucesos, todas las apuestas anticipadas (AP) se declararán
              nulas:<br><br>
              <ol type="a">
              <li>La carrera se abandona;</li>
              <li>La carrera se declara oficialmente nula;</li>
              <li>Las condiciones de la carrera se modifican tras haber realizado las apuestas (tal y como se establece en las Reglas de
              Tattersalls).</li>
              </ol>
              </li><br>
              <li>Además de las posibilidades indicadas anteriormente, todas las apuestas anticipadas (AP) se considerarán válidas siempre
              que la carrera, a la que hace referencia la apuesta, se corra en el plazo de 14 días completos desde la fecha prevista
              inicialmente, a no ser que se haya llegado a otro acuerdo.</li><br>
              <li>Las apuestas AP se establecen al precio y términos de lugar aplicables en el momento de la aceptación. Si una apuesta es
              aceptada con las cuotas o términos de posición incorrectos, [the Operator] se reserva el derecho, a su propia discreción de
              establecer la apuesta como nulas y se reembolsará la apuesta.</li>
              </ol>
              <br>
              7.	Apuestas de pronóstico y tricast<br><br>
              <ol>
              <li><strong>Apuestas de pronóstico y tricast: reglas generales</strong><br>
              a. Los pronósticos están permitidos en carreras con 3 o más corredores. Las apuestas realizadas en carreras en la que participen
              menos corredores se declararán nulas.<br>
              b. Las apuestas tricast están permitidas en carreras en las que se declara un dividendo de apuesta tricast oficial a través de
              un ordenador.<br>
              c. En el caso de que no se declare ningún dividendo, las apuestas se considerarán como un pronóstico generado por un ordenador de
              las selecciones elegidas para finalizar en primer y segundo lugar, sin incluir el tercer puesto.<br>
              d. Las apuestas de pronóstico se establecerán según los resultados del pronóstico del precio inicial (SP) generado por un ordenador.
              En el caso de que, por cualquier motivo, no se obtengan resultados del precio inicial (SP) del pronóstico, las apuestas se
              considerarán nulas.<br>
              e. Las apuestas de resultados siempre deben ser nombradas. No se aceptan apuestas sobre favoritos sin nombrar y si estas apuestas
              se aceptan por error, serán anuladas.<br>
              f. Las apuestas se anularán en el caso de apuestas de pronóstico y tricast en las que está implicado un no corredor.
              </li><br>
              <li><strong>Pronóstico exacto</strong><br>
              En un pronóstico exacto es posible apostar por el orden exacto de finalización de los galgos que logren el primer y segundo puesto
              de una carrera. </li><br>
              <li><strong>Pronóstico inverso</strong><br>
              En un pronóstico inverso es posible apostar por los galgos que logren el primer y segundo lugar de una carrera, sin importar el
              orden de finalización. El coste de esta apuesta duplica el coste de un pronóstico exacto, ya que dicha apuesta puede considerarse
              como 2 apuestas de pronóstico exacto.</li><br>
              <li><strong>Pronóstico combinado</strong><br>
              En un pronóstico combinado es posible elegir 3 o más selecciones de una carrera en concreto. Para que la apuesta se considere
              ganadora, 2 de los galgos seleccionados deben finalizar en primer y segundo lugar, sin importar el orden. </li><br>
              <li><strong>Apuesta tricast</strong><br>
              En una apuesta tricast es posible apostar por el orden exacto de finalización de los galgos que logren el primer, segundo y
              tercer puesto de una carrera. </li><br>
              <li><strong>Tricast combinada</strong><br>
              En una apuesta tricast combinada es posible apostar por los galgos que logren el primer, segundo y tercer puesto de una carrera,
              sin importar el orden de finalización.</li>
              </ol>
              <br>
              8.	Apuestas de distancia<br><br>
              <ol>
              <li><strong>Reglas generales (aplicables a todas las apuestas de distancia)</strong><br>
              a. Los resultados de las apuestas de distancia ganadora se considerarán como la distancia oficial entre los galgos que hayan
              cruzado la línea de meta en primer y segundo puesto, y que hayan finalizado la carrera. <br>
              b. En las "Apuestas de distancia" se aplica la siguiente terminología<br>
              <ul>
              <li>"Nariz" = 0,05 de un cuerpo</li>
              <li>"Cabeza escasa" = 0,1 de un cuerpo</li>
              <li>"Cabeza" = 0,2 de un cuerpo</li>
              <li>"Cuello" = 0,3 de un cuerpo</li>
              <li>"Medio cuerpo" = 0,5 de un cuerpo</li>
              <li>"Tres cuartos" = 0,75 de un cuerpo</li>
              </ul>
              c. La cantidad máxima de "cuerpos" de cada carrera es de 12.</li><br>
              <li><strong>Apuestas de distancia "ganadora del evento"</strong><br>
              a. En las apuestas de distancia "ganadora del evento" es posible apostar por el total de distancias ganadoras de un determinado
              evento. <br>
              b. En el caso de que un evento incluya una o más carreras que se suspendan o se declaren nulas, todas las apuestas de este
              mercado se declararán nulas. Dicha condición estará vigente a no ser que todas las ofertas que se hayan decidido antes de la
              suspensión y posiblemente no puedan modificarse independientemente de los eventos futuros permitan establecer dichos mercados.
              En este caso, las apuestas se establecerán según el resultado decidido.<br>
              d. [the Operator], según su exclusivo criterio, se reserva el derecho a ofrecer apuestas relacionadas con una cantidad específica
              de eventos en un período/día indicados. En el caso de que alguno de los eventos indicados incluya 1 o más carreras que se suspenden
              o se declaran nulas, todas las apuestas de este mercado se declararán nulas. Dicha condición estará vigente a no ser que todas las
              ofertas que se hayan decidido antes de la suspensión y posiblemente no puedan modificarse independientemente de los eventos futuros
              permitan establecer dichos mercados. En este caso, las apuestas se establecerán según el resultado decidido.</li><br>
              <li><strong>Apuestas de distancia "ganadora de la carrera"</strong><br>
              a. En las apuestas de distancia "ganadora de la carrera" es posible apostar por la distancia ganadora de una determinada carrera.<br>
              b. En el caso de que no se declare ningún resultado oficial, todas las apuestas de este mercado se declararán nulas.</li><br>
              <li><strong>Apuestas de distancia "ganadora del galgo"</strong><br>
              a. En las apuestas de distancia "ganadora del galgo" es posible apostar que un galgo en concreto gane una carrera específica por una
              distancia específica. <br>
              b. En el caso de que no se declare ningún resultado oficial, todas las apuestas de este mercado se declararán nulas.<br>
              c. En el caso de que el galgo elegido no gane la carrera, todas las apuestas de este mercado se establecerán como apuestas
              perdedoras.</li>
              </ol>
              <br>
              9.	Trap Challenge<br><br>
              <ol type="a">
              <li>El "Trap Challenge" (Desafío de la Trampa) es cuando se puede apostar en la trampa con el mayor número de galgos ganadores
              en una reunión y/o en un número determinado de carreras. </li><br>
              <li>Todas las apuestas refiriéndose al "Trap Challenge" se mantienen independientemente de las trampas vacantes, la "reserva"
              o carreras canceladas asumiendo que al menos la mitad de las carreras programadas se llevó a cabo y se publicaron sus
              resultados. </li><br>
              <li>Para el establecimiento de las apuestas del "Trap Challenge", si dos o más galgos son considerados ganadores de una carrera,
              todos los galgos en 1er sitio (y sus respectivas trampas) serán considerados como ganadores de la carrera especificada. </li><br>
              <li>Si dos o más trampas comparten posiciones finales, el establecimiento de las apuestas se basa en la regla de "Dead Heat" tal
              como se define en el &lt;Section B, Para 5.14&gt;.</li><br>
              <li>Las apuestas relacionadas con la Racing Post Greyhound TV (RPGTV) Flying Four Selections serán declaradas nulas si alguna de
              las carreras es declarada como nula, a menos que el resultado ya se haya determinado. Cualquier "Dead Heat" sobre el primer
              puesto también será considerado como ganador.</li><br>
              </ol>
              `
    }
];
