import { IDocumentData } from "../interfaces/Data.interface";

export const ReglasGralesApuestasData:Array<IDocumentData> = [
    {
        id: 1,
        title: 'Terminos Comunes de Referencia',
        content: `1) A menos que estén ya sea parte de la oferta de apuestas o en las reglas específicas del deporte, todas
        las apuestas deben ser consideradas válidas sólo por el resultado al final del "tiempo regular" o del
        "tiempo de reglamentario". El "Tiempo regular" o "Tiempo reglamentario" se define según la
        interpretación de las reglas oficiales publicadas por la autoridad competente correspondiente. Por
        ejemplo, en el fútbol, el tiempo reglamentario está estipulado en 90 minutos incluido el tiempo de
        descuento y en el hockey sobre hielo está estipulado en 3 periodos de 20 minutos cada uno. En el caso
        de que la autoridad competente estipule, antes del inicio del evento, que dicho evento tendrá una
        duración diferente, esta decisión será considerada regla oficial del evento (por ejemplo, partidos de
        fútbol disputados con formatos de 3 tiempos de 30 minutos cada uno o de 2 tiempos de 40 minutos cada
        uno). Sin embargo, en este caso el tiempo se limita al tiempo de juego "regular" y no se incluyen
        prolongaciones como prórrogas ni tiempos suplementarios, a menos que se indique explícitamente.<br><br>
        2) En "Apuestas en vivo" es posible apostar durante un partido o un evento que ya se han iniciado.
        BetPlay no se responsabilizará en el caso de que no sea posible realizar una apuesta o si la actualización
        del marcador en directo no es correcta. El titular de la cuenta será el responsable en todo momento de
        conocer el resultado, su progresión, y el tiempo que se queda antes el final del partido. BetPlay no se
        responsabilizará de ningún cambio realizado en la programación de Apuestas en vivo ni de la
        interrupción del servicio de Apuestas en vivo.<br><br>
        3) La función [Cobro anticipado] permite al Titular de la cuenta canjear una apuesta, cuyo estado aún no se
        haya resuelto, según su valor actual. Solo está disponible en determinados eventos, tanto previos a un
        partido como en directo, y en apuestas sencillas y múltiples. La función [Cobro anticipado] no puede utilizarse
        en las apuestas gratuitas. Las solicitudes de [Cobro anticipado] pueden estar sujetas al mismo procedimiento de
        retraso que se estipula en la "Sección A, párrafo 4.5". En caso de que esto ocurra durante dicho retraso,
        sea cual sea el motivo, bien porque se elimine la oferta o fluctúen las cuotas, no se aceptará la solicitud
        de [Cobro anticipado] y se notificará al Titular de la cuenta con un mensaje en pantalla. BetPlay se reserva el
        derecho de ofrecer dicha función a su entera discreción y no acepta ni asume ningún tipo de
        responsabilidad si la función no está disponible. En caso de que una solicitud de [Cobro anticipado] se realice
        correctamente, la apuesta se resolverá inmediatamente y no se tendrá en consieración ningún evento
        posterior en relación con la apuesta. Si una apuesta usando la función [Cobro anticipado] se ha visto afectada
        por un error técnico, de precio o de resolución en cualquier momento comprendido entre el instante en
        que se realizó la apuesta original y la resolución final, BetPlay se reserva el derecho de rectificar dicha
        equivocación de acuerdo con la "Sección A, párrafo 6.2.".<br><br>
        4) El "Participante" es un objeto que forma parte de un evento. En las apuestas a "Uno contra uno" y "A
        tres" el participante solo hace referencia a objetos que están sujetos al evento "Uno contra uno" o "A
        tres" en cuestión. Para evitar confusiones, un "participante" se considera un único jugador, un equipo o
        un grupo de personas agrupados/alistados conjuntamente. Cualquier referencia a los participantes con
        estas reglas se debe interpretar correspondientemente, cualquiera sea su definición en singular o plural.<br><br>
        5) La fecha límite (fecha tope) que aparece en el sitio web solo tiene fines informativos. BetPlay, a su
        única discreción, se reserva el derecho a suspender, de forma parcial o total, la actividad de apuestas en
        cualquier momento si lo estima oportuno.<br><br>
        6) Las estadísticas o los textos publicados en el sitio(s) web de BetPlay se considerarán información
        añadida. BetPlay no se responsabilizará en el caso de que la información no sea correcta. El titular de la
        cuenta será el responsable en todo momento de conocer las circunstancias relacionadas con un evento.<br><br>
        7) retorno teórico en apuestas fijas al jugador se le da por las probabilidades de todos los posibles
        resultados de la oferta. La recuperación teórica para un jugador en una oferta de apuesta con 3 los
        resultados a, b y c se puede calcular de la siguiente manera.<br>
        <var>Teórico % = 1/(1 /" resultado cuotas a" + 1/"resultado cuotas b" + 1/"resultado cuotas c") x 100.</var>`,
    },
    {
        id: 2,
        title: 'Tipos de Apuestas',
        content: `1) En "1X2" es posible apostar al resultado (parcial o definitivo) de un partido o evento. Las opciones
        son: "1" = equipo local/Jugador 1, o el participante que aparece en la parte izquierda de la oferta; "X" =
        empate/tablas, o la opción que aparece en el medio; "2" = equipo visitante/Jugador 2, o el participante
        que aparece en la parte derecha de la oferta. En ocasiones especiales o competiciones específicas, [el
        Operador] puede mostrar una oferta llamada "Americana" (por ejemplo: el equipo visitante @ equipo
        local), donde el equipo local se enumera siguiendo al equipo visitante. Sin tener en consideración la
        posición de los equipos en el marcador/recibo de apuesta, las referencias a los equipos "Local" y
        "Visitante" siempre hará referencia a los equipos reales que jueguen en casa (local) y fuera de casa
        (visitante) respectivamente, como determina la organización oficial, excluyendo las excepciones
        indicadas en (Section B, Para 5.32)<br><br>
        2) En "Resultado correcto" (también conocido como Apuestas de resultado) es posible apostar por el
        resultado exacto (parcial o definitivo) de un partido/evento o parte de este.<br><br>
        3) En "Más/Menos de" (también conocido como Totales) es posible apostar a la cantidad (parcial o
        definitiva) de goles, puntos, saques de esquina, rebotes, minutos de penalización, etc. Si la cantidad
        total de ocurrencias es exactamente igual a la línea de apuestas, entonces todas las apuestas se
        declararán anuladas. Por ejemplo, una oferta de apuestas en qué la línea de apuestas es 128.0 puntos y
        el partido se termina en el resultado de 64 a 64 se declarará nula (cuota de 1).<br><br>
        4) En "Par/Impar" es posible apostar a la cantidad (parcial o definitiva) de goles, puntos, saques de
        esquina, rebotes, minutos de penalización, etc. "Impar" es 1, 3, 5, etc.; "Par" es 0, 2, 4, etc.<br><br>
        5) "Uno contra uno" y "A tres" son competiciones entre dos o tres participantes/resultados, procedentes
        de un evento oficial o de cualquier otro tipo, según indique virtualmente BetPlay.<br><br>
        6) En "Primera parte/Tiempo reglamentario" es posible apostar al resultado de la primera parte y al
        resultado del espacio de tiempo indicado. Por ejemplo, si en la primera parte el equpo local va ganando
        por 1-0 y el partido termina 1-1, el resultado ganador será 1/X. Las apuestas de este mercado serán
        declaradas nulas si el partido se disputase en un formato en el que fuera imposible determinar el
        resultado según los espacios de tiempo indicados en la oferta.<br><br>
        7) En "Apuestas por periodos" es posible apostar al resultado de cada periodo del partido/evento. Por
        ejemplo, si los resultados de los periodos de un partido de hockey sobre hielo son 2-0/0-1/1-1, el
        resultado ganador será 1/2/X. Las apuestas de este mercado serán declaradas nulas si el partido se
        disputase en un formato en el que fuera imposible determinar el resultado según los espacios de tiempo
        indicados en la oferta.<br><br>
        8) En "Apuesta sin empate" (conocida como Moneyline) es posible apostar por "1" o "2" tal y como se
        indica en (Section B, Para 2.1). También es muy común hacer referencia a "Apuesta sin empate" en
        los casos en los que no se ofrecen cuotas por empate. Se devolverán las apuestas si el partido/evento en
        cuestión finaliza sin un resultado ganador (por ejemplo, acaba en empate) o no se produce el
        acontecimiento (por ejemplo, Primer gol, Apuesta sin empate y resultado 0-0).<br><br>
        9) En "Hándicap" (conocido como Spread) es posible apostar a si el resultado escogido será el ganador
        una vez añadido/restado (según corresponda) el hándicap indicado al/del partido/periodo/resultado final
        de la apuesta en cuestión. En tales circunstancias en las que el resultado después de aplicar el ajuste de
        la línea de hándicap sea exactamente igual que la línea de apuesta, todas las apuestas relacionadas con
        esta oferta se declararán nulas. Ejemplo: una apuesta a -3,0 goles se declarará nula si el equipo escogido
        gana el partido por una diferencia exacta de 3 goles (3-0,4-1, 5-2, etc.). Cualquier referencia incluida en
        esta sección al término "margen" debe entenderse como el resultado que surge de la resta de los
        goles/puntos marcados/anotados por los 2 equipos/participantes.<br><br>
        A menos que se especifique lo contrario todos los hándicaps indicados en el sitio de BetPlay deben
        calcularse en función del resultado desde el inicio del partido/periodo indicados hasta el final del
        partido/periodo indicados. No obstante, es habitual que para determinadas ofertas de apuestas con
        hándicap en deportes específicos (hándicap asiático en fútbol), solo se tengan en cuenta los resultados
        obtenidos desde el instante en que se realizó la apuesta hasta el final del intervalo de tiempo indicado,
        por lo que se ignora cualquier gol/punto marcado/anotado antes del momento en que se realizó y aceptó
        la apuesta. Cualquier oferta de apuesta con estas características se mostrará claramente en el sitio web y
        se resaltará en el Historial de apuestas del cliente con el resultado en el momento de realizar la apuesta.<br><br>
        Existen tres tipos de formatos de "apuestas con hándicap":<br><br>
        Hándicap 2-way: Equipo A (-1.5) frente a Equipo B (+1,5)<br><br>
        Ejemplo:<br><br>
        ·&nbsp;&nbsp;&nbsp;&nbsp;El Equipo A recibe un hándicap de -1,5 goles en el partido. Para ganar la apuesta, el Equipo A debe
        ganar el partido con un margen igual o mayor que el hándicap indicado (es decir, 2 goles o más).<br><br>
        ·&nbsp;&nbsp;&nbsp;&nbsp;El Equipo B recibe una ventaja de +1,5 goles en el partido. Para ganar la apuesta, el Equipo B debe
        ganar el partido, acabar el partido en empate o no perder con un margen igual ni mayor que la ventaja<br>
        indicada (es decir, perder con un margen de 1 gol).<br><br>
        Hándicap 3-way: Equipo A (-2) empata (exactamente a 2) con Equipo B (+2)<br><br>
        Ejemplo:<br><br>
        ·&nbsp;&nbsp;&nbsp;&nbsp;El Equipo A recibe un hándicap de 2 goles en el partido. Para ganar la apuesta, el Equipo A debe
        ganar el partido con un margen mayor que el hándicap indicado (es decir, 3 goles o más).<br><br>
        ·&nbsp;&nbsp;&nbsp;&nbsp;El empate podría ser el resultado ganador en caso de que el partido finalizara exactamente con el
        margen indicado (es decir, que el partido acabara con resultados como 2-0, 3-1 y 4-2).<br><br>
        ·&nbsp;&nbsp;&nbsp;&nbsp;El Equipo B recibe una ventaja de 2 goles en el partido. Para ganar la apuesta, el Equipo B debe
        ganar el partido, acabar el partido en empate o no perder con un margen igual ni mayor que la ventaja
        indicada (es decir, perder solo con un margen de 1 gol).<br><br>
        Hándicap asiático: Equipo A (-1.75) frente a Equipo B (+1,75)<br><br>
        Ejemplo:<br><br>
        ·&nbsp;&nbsp;&nbsp;&nbsp;El Equipo A recibe un hándicap de -1,75 goles en el partido. Significa que la apuesta se divide en 2
        apuestas iguales y se decantan por los resultados -1,5 y -2,0. Para que la apuesta se pague íntegramente
        según las cuotas indicadas, el Equipo A debe ganar el partido con un margen mayor que los dos
        hándicaps indicados (es decir, un margen de 3 goles o más). En el caso de que el Equipo A gane con un
        margen de solo 2 goles, la apuesta se considerará ganadora parcialmente, con un pago íntegro por la
        parte de la apuesta de -1,5 y un reintegro por el -2,0, puesto que el resultado de esa parte de la apuesta
        se consideraría "empate". Si el partido generara cualquier otro resultado, como una victoria del Equipo
        A con un margen de solo 1 gol, se perdería toda la apuesta.<br><br>
        ·&nbsp;&nbsp;&nbsp;&nbsp;El Equipo B recibe una ventaja de +1,75 goles en el partido. Significa que la apuesta se divide en 2
        apuestas iguales y se decantan por los resultados +1,5 y +2,0. Para que la apuesta se pague íntegramente
        según las cuotas indicadas, el Equipo B debe ganar el partido, acabar el partido en empate o no perder
        con un margen igual ni mayor que cualquiera de las ventajas indicadas (es decir, perder solo con un
        margen de 1 gol). En el caso de que el Equipo B pierda con un margen exacto de 2 goles, la apuesta se
        considerará perdedora parcialmente, con un reintegro por la parte de la apuesta -2,0 y una pérdida por la
        parte de la apuesta -1,5. Si el partido generara cualquier otro resultado que supusiera la derrota del
        Equipo B con un margen de 3 goles o más, se perdería toda la apuesta.<br>
        10) En "Dobles" es posible apostar a dos resultados (parciales o definitivos) de un partido o evento a la
        vez. Las opciones son: 1X, 12 y X2 con "1", "X" y "2" tal y como se indica en (Section B, Para 2.1).<br><br>
        11) Con las apuestas a "Ganador" o "Posición" es posible elegir entre varias alternativas y apostar a que
        un participante ganará o quedará en un puesto en concreto en la clasificación del evento o competición
        en cuestión. Si dos o más participantes comparten posiciones finalistas, el resultado se basa en la
        definición indicada en (Section B, Para 5.14).<br><br>
        12) Una apuesta "Each Way" (EW) se refiere a una apuesta en el que la selección elegida debe ganar o
        ser colocada en las condiciones de pago. La apuesta se divide en dos (el "Ganador" y el "Colocado ")
        con una participación igualitaria. El pago de estas apuestas tendrá en cuenta las normas aplicables del
        "Ganador "y la apuesta "Colocado", es decir, las reglas específicas del deporte y (Section B, Para 5,
        Cláusula 11).<br><br>
        13) "Gol Minutos" es la apuesta por la que es posible apostar en la suma de minutos en que se marcaron
        los goles. Cuando se paga estas apuestas, los goles marcados en la prórroga de dos partes son
        considerados como si hubiesen sido marcados en el minuto 45 en el caso de que el gol fue anotado en el
        tiempo adicional de la primera parte, y a los 90 minutos en el caso de que el gol lo marcó en el tiempo
        adicional de la segunda parte. Los goles en su propia meta no serán tomados en cuenta en el pago de
        "Gol Minutos" de jugador individual.`,
    },
    {
        id: 3,
        title: 'Apuestas de Proposiciones',
        content: `1) Los "1X2" o los "Uno contra uno" irreales/virtuales son enfrentamientos implícitos en los que se
        comparan los resultados de dos o más participantes/equipos que no compiten directamente entre sí en el
        mismo partido/evento. El resultado se basará en el número de veces que cada participante registre un
        acontecimiento predefinido (por ejemplo, goles) en el partido en cuestión. Todos los partidos/eventos
        relacionados deben completarse para que las apuestas sean válidas, a excepción de aquellos cuyos
        resultados se hayan decidido antes de la suspensión y que posiblemente no puedan modificarse
        independientemente de los eventos futuros, que se establecerán según el resultado decidido.<br><br>
        a. A menos que se indique lo contrario, las apuestas se refieren al próximo partido/evento/ronda oficial
        (si lo hay), cuyos los participantes/equipos inscritos participarán.<br><br>
        b. Todos los partidos/eventos deben terminar en el mismo día/sesión durante la cual el
        partido/evento/ronda está programado para ser completados para que las apuestas se mantienen, a
        excepción de las ofertas cuyos resultados fueron decididos antes el abandono y no se podía cambiar
        independientemente de los acontecimientos futuros, que se establecen de acuerdo con el resultado.<br><br>
        c. Los resultados de estas ofertas no se tendrán en cuenta que los hechos que resultan del partido actual.
        Los resultados debido a un abandono y otras decisiones especificadas en los clausulas 2, 3 y 4 de
        (Sección B, Para 5) no serán considerados.<br><br>
        d. Si estos criterios no son concluyentes para determinar el resultado de la oferta de apuestas, los
        siguientes criterios se utilizarán para pagar progresivamente la oferta:<br><br>
        (i) las normas específicas aplicables al deporte que figuran en (Sección C)<br><br>
        (ii) los resultados que figuran en las normas del establecimiento (Section B, Para 5).<br><br>
        Las apuestas se establecerán como nulas si todavía es imposible determinar un resultado ganador.<br><br>
        2) En "Grand Salami" es posible apostar al número total de acontecimientos indicados (ejemplo: Goles
        totales, Carreras totales) que tendrán lugar en diversos partidos/eventos durante una ronda, día o partido
        en concreto. Todos los partidos/eventos relacionados deben completarse para que las apuestas sean
        válidas, a excepción de aquellos cuyos resultados se hayan decidido antes de la suspensión y que
        posiblemente no puedan modificarse independientemente de los eventos futuros, que se establecerán
        según el resultado decidido.<br><br>
        3) Las apuestas a Más/Menos de dirigidas a la clasificación de los participantes según los
        resultados/eventos deben interpretarse de la siguiente forma: "Más de" significa una posición peor o
        inferior, mientras que "Menos de" significa una posición mejor o superior. Ejemplo: Una apuesta a la
        clasificación de un jugador en un torneo con una línea Más/Menos de 2,5 se establecerá como Menos de
        si el jugador se clasifica primero o segundo. El resto de posiciones se establecerán como Más de.<br><br>
        4) Las apuestas a "Cuarto/Primera parte/Periodo X" hacen referencia al resultado o a la puntuación
        obtenidos en el periodo de tiempo en cuestión y no incluyen los puntos/goles/eventos obtenidos en otras
        partes del evento/partido. Las apuestas de este mercado serán declaradas nulas si el partido se disputase
        en un formato en el que fuera imposible determinar el resultado según los espacios de tiempo indicados
        en la oferta.<br><br>
        5) Las apuestas a "Resultado al final del cuarto/la primera parte/el periodo X" hacen referencia al
        resultado del partido/evento tras la finalización del periodo de tiempo estipulado y tendrán en cuenta los
        puntos/goles/eventos obtenidos en partes anteriores del evento/partido. Las apuestas de este mercado
        serán declaradas nulas si el partido se disputase en un formato en el que fuera imposible determinar el
        resultado según los espacios de tiempo indicados en la oferta.<br><br>
        6) Las apuestas a "Primero en conseguir X puntos/Primero en conseguir X goles..." y ofertas similares
        hacen referencia al equipo/participante que primero logre la cantidad de puntos/goles/eventos
        especificada. Si la oferta muestra un periodo de tiempo en cuestión (o cualquier otra restricción de
        tiempo) no incluirá puntos/goles/eventos obtenidos en otras partes del evento/partido que no guarden
        relación con el periodo de tiempo mencionado. Si la puntuación indicada no se consigue dentro del
        periodo de tiempo estipulado (si existiese alguno), todas las apuestas se declararán nulas, a menos que
        las cuotas para dicha circusntancia se hubieran indicado en el mercado.<br><br>
        7) Las apuestas a "Ganador del punto X/Siguiente en marcar" y ofertas similares hacen referencia al
        equipo/participante que consiga el acontecimiento en cuestión. A la hora de establecer estas ofertas, no
        se tendrán en cuenta referencias a eventos anteriores a los acontecimientos indicados. Si la
        circunstancia indicada no se consigue/gana dentro del periodo de tiempo estipulado (si existiese
        alguno), todas las apuestas se declararán nulas, a menos que las cuotas para dicha circusntancia se
        hubieran indicado en el mercado.<br><br>
        8) Las apuestas referentes a un acontecimiento en particular a una hora predeterminada, como “Primera
        tarjeta” o “Próximo equipo que recibirá minutos de penalización” se declararán nulas si no es posible,
        sin ninguna duda razonable, decidir el resultado ganador, por ejemplo en el caso de jugadores de
        diferentes equipos que reciban una tarjeta en la misma interrupción del juego.<br><br>
        9) "Marcará primero y ganará" hace referencia al equipo/participante que marcará una anotación y
        ganará el partido. Si no se anotase en el partido todas las apuestas se declararán nulas.<br><br>
        10) Las referencias a "portería a cero"/”Sin anotación” indican que el equipo/participante no debe
        encajar ningún gol/punto durante el partido/periodo de tiempo determinado.<br><br>
        11)"Victoria tras remontada" hace referencia al equipo/participante que ganará el partido después de ir
        al menos 1 gol/punto por detrás de sus rivales en cualquier momento del partido/periodo de tiempo
        determinado.<br><br>
        12) Las referencias a un equipo/participante que ganará todos los tiempos/periodos (por ejemplo,
        Equipo que ganará ambos tiempos) significan que el equipo especificado debe marcar más goles/puntos
        que su contrincante en todos los tiempos/periodos estipulados del partido.<br><br>
        13) Las referencias a "Tiempo de descuento" aluden al tiempo indicado por la autoridad competente y
        no al tiempo real jugado.<br><br>
        14) Las apuestas a ofertas tales como "Jugador del partido", "Jugador más valioso", etc. se basarán en la
        decisión de los organizadores’ de la competición, a menos que se indique lo contrario.<br><br>
        15) Las apuestas que hagan referencia a términos tales como "gol decisivo" se establecerán en base al
        goleador que al final del partido/empate (según corresponda) sea considerado el jugador que ha
        conseguido una clara ventaja con respecto al otro equipo, aunque se hayan marcado otros goles
        posteriormente que hayan resultado irrelevantes de cara al resultado final. Para declarar una apuesta
        como "SÍ", el equipo del jugador indicado debe ser el ganador de dicho partido en concreto (en el caso
        de que se trate de un solo partido) o pasar a la siguiente ronda/ganar la competición. Los goles que se
        marquen durante el Tiempo regular y la Prórroga se tendrán en cuenta, aunque este no será el caso de
        los Lanzamientos de penalti.<br><br>
        16) Las apuestas a eventos que cuenten con una selección de acontecimientos que podrían producirse en
        un partido (por ejemplo, "¿Qué le ocurrirá primero al jugador?" con las opciones Marcará un gol,
        Recibirá una tarjeta amarilla/roja, Será sustituido) se declararán nulas si no se produce ninguno de los
        eventos/resultados indicados, a menos que las cuotas para dicha circusntancia se hubieran indicado en
        el mercado.<br><br>
        17) Las apuestas de traspaso también tendrán en cuenta los jugadores cedidos.<br><br>
        18) Las apuestas referentes a cambios en la directiva hacen referencia al entrenador/director técnico
        (según corresponda) que dimite/es destituido por algún motivo. Las apuestas serán válidas incluso si un
        responsable conjunto (en el caso de que existiera) abandona su puesto y se establecerán en
        consecuencia. En el caso de que no se produzcan más cambios entre el momento en el que se realiza la
        apuesta y el último encuentro de liga (sin incluir play-offs, play-outs, postemporada, etc.), las apuestas
        realizadas tras el último cambio en la directiva (en el caso de que existiera) se declararán nulas, a menos
        que se haya ofrecido una opción de apuesta adecuada. Los mercados de fútbol tendrán en cuenta y
        actuaran en consecuencia en relación con los entrenadores interinos que hayan dirigido al equipo en 10
        partidos consecutivos tras el cambio de entrenador.<br><br>
        19) Las ofertas que hacen referencia a qué equipo/participante conseguirá un resultado en particular
        frente a otro equipo/participante (por ejemplo, Próximo equipo que vencerá al equipo X), así como las
        ofertas que hacen referencia a la clasificación en una fecha determinada, estarán vigentes y se
        establecerán independientemente de los cambios finales que se produzcan en los encuentros y el
        número de partidos/rondas jugados.<br><br>
        20) El pago de las ofertas de las apuestas haciendo referencia al equipo/participante que será el primero
        en lograr una actuación particular contra el otro equipo(s)/participante(s) (por ejemplo, equipo de anotar
        en la primera jornada de la competición X) se basará en el momento en el partido en cuestión durante el
        cual se llevó a cabo la acción. Por ejemplo: El equipo A juega el sábado y anotó su primer gol a los 43
        minutos mientras que el equipo B juega el domingo y anotó su primer gol en el minuto 5, el Equipo B
        será considerado el ganador.<br><br>
        21) De cuando en cuando, BetPlay, atendiendo a su criterio y sin prejuicio de los imprevistos
        enumerados en (Section A, Para 5, Clause 4), puede decidir publicar las ofertas relativas a la actuación
        individual de un participante/equipo u ofertas que combinen los posibles resultados de 2 o más
        participantes (por ejemplo: múltiples mejorados, cuotas impulsadas, etc.) con cuotas más elevas de lo
        habitual. BetPlay se reserva el derecho de retirar dichas ofertas, modificar las cuotas y realizar otros
        cambios que BetPlay considere necesarios según su criterio. La resolución de estas ofertas se basará en
        los siguientes criterios y en el orden indicado:<br><br>
        1. A no ser que se especifique, la oferta hace referencia únicamente en las fechas indicadas y/o
        encuentros/eventos/rondas oficiales (según corresponde) en la que los participantes/equipos indicados
        tienen previsto participar en el momento de publicación de la oferta;<br>
        2. Resultados indicados según las normas específicas del deporte en cuestión. Todos los eventos
        relacionados deberán haber finalizado según lo previsto en los plazos respectivos para que las apuestas
        se mantengan a no ser que cualquier otro resultado en la oferta determinase sin duda alguna el resultado
        de la oferta de tal modo que su finalización (o la ausencia de dicha finalización) de los demás eventos
        de la oferta no influenciase el resultado de la oferta. Se resolverán estos mercados según los resultados
        ya determinados;<br>
        3. A no ser que se indique de manera específica en la oferta, la resolución solo tendrá en cuenta hechos
        que deriven de la disputa del evento. Los resultados derivados de abandonos, protestas, cambios del
        primer resultado oficial, etc. no se tendrán en consideración. Las apuestas se devolverán si resultase
        imposible determinar un resultado ganador en conformidad con las normas relativas al deporte en
        cuestión;<br>
        4. Todas las acepciones relativas a la oferta se deberán cumplir de manera plena e indudable si la
        apuesta es ganadora, al margen de los posibles conflictos con las normas específicas del deporte en
        cuestión o cualquier interpretación basada en la presentación previa o actual de las ofertas relacionados
        con los eventos en dicho deporte y el modo en el que BetPlay las presenta entre sus apuestas. Cuando
        proceda, si la oferta incluyese algún resultado que coincida exactamente con la opción más/menos de o
        spread (PUSH), no se considerará que dicho resultado cumpla con el suceso indicado y el resultado de
        la apuesta será PÉRDIDA.<br><br>
        A pesar de que BetPlay tome todas precauciones debidas para asegurar una experiencia superior al
        usuario, se entiende que los mercados pudieran fluctuar de tal manera que, en un momento dado, dichos
        mercados no representan un valor mejorado en comparación con las ofertas equivalentes presentes en
        las apuestas de BetPlay. Todas las apuestas seguirán siendo válidas al margen de estas fluctuaciones<br><br>
        22) Durante la celebración de eventos seleccionados, BetPlay proporcionará a los usuarios con la
        funcionalidad de realizar apuestas que combinen los resultados y sucesos de ese mismo evento
        (combinaciones intraevento), bien sea mediante combinaciones prestablecidas presentes en las apuestas
        (excluyendo multiples mejorados, cuotas impulsadas, etc., para lo cual se aplica (Section B, Para 3,
        Clause 21)) o mediante la función [BetBuilder]. Dicha función estará presente únicamente a discreción
        de BetPlay y sin perjuicio de lo descrito en (Section A, Para 5, Clause 4). El resultado se basará en las
        normas específicas del deporte en cuestión. Todos los sucesos indicados deberán haberse cumplido para
        que se considere que una apuesta se ha materializado y se pueda proceder a su pago según la cuota. Para
        las puestas devueltas se deberá considera como NULA al menos parte de su combinación. Cuando
        proceda, si la oferta incluyese algún resultado que coincida exactamente con la opción más/menos de o
        spread (PUSH), se eliminará esa parte de la combinación del cálculo del valor y la apuesta se pagará
        teniendo en cuenta solo las demás partes de la combinación.<br><br>
        23) "Teaser+" permite al usuario la posibilidad de dedicar la misma cantidad predefinida de puntos a
        todos los resultados presentes en una combinación parlay que contenga Spreads (hándicaps), Totales
        (Más/Menos), o una combinación de ambas. Ejemplo: El usuario combina Equipo NFL X +6,5 puntos
        en una parlay con más de 41 puntos en el partido de la NFL entre el equipo Y parla el equipo Z. Al
        elegir la opción "Teaser + Fútbol 6 puntos", las líneas y las cuotas se vuelven a calcular en una parlay
        con el Equipo X + 12,5 puntos (anteriormente +6,5) combinado con Más 35 puntos (anteriormente Más
        41). Si alguna parte de la apuesta "Teaser +" resulta nula (push), esa selección en particular será
        eliminada de la apuesta parlay y el cálculo de cuotas/pagos se reajustará consecuentemente.<br><br>
        24) Las apuestas resultantes del "Resto del partido" o similares solo tiene en consideración los
        resultados y ocurrencias obtenidos en el momento de realizar la apuesta hasta el final del tiempo
        establecido, desechando las ocurrencias registradas antes de que se realizase y validase la apuesta.<br><br>
        25) Apuestas a periodos de tiempo e intervalos específicos (por ejemplo: Resultado del partido entre los
        minutos 60:00-89:59), considerará solo los resultados y ocurrencias acumulados durante el periodo de
        tiempo/intervalo especificado. La decisión no tendrá en cuenta otros puntos/goles/eventos resultantes de
        otras partes del evento/partido que no corresponda al periodo de tiempo/intervalo, incluidos
        paros/tiempo extra, a menos que se especifique.`,
    },
    {
        id: 4,
        title: 'Apuesta de Sistema',
        content: `1) En las apuestas prepartido, es posible combinar hasta doce (12) ofertas diferentes en un solo cupón.
        En base a estas doce ofertas los titulares de la cuenta podrán elegir su propio número de apuestas
        sencillas, dobles, triples, etc.<br><br>
        2) Livebetting permite combinar hasta doce (12) ofertas diferentes en un único cupón a modo de
        apuesta acumulada. Según estas doce apuestas, los usuarios podrán escoger su propio número de
        singles, dobles, triples, etc.<br><br>
        3) BetPlay se reserva el derecho a limitar la cantidad de combinaciones debido a lo que se conoce como
        dependencia de/sucesos relacionados con los resultados, tal y como se define en (Section A, Para 5.4),
        así como a otros factores, a su única discreción.<br><br>
        4) Es posible incluir uno o varios partidos como ‘bankers’, lo que significa que los partidos/eventos
        seleccionados se incluirán en todos los cupones.<br><br>
        5) ‘Trixie’ es una combinación que incluye una apuesta triple y tres dobles en una selección de tres
        partidos.<br><br>
        6) Un “Patent” es una combinación, la cual incluye un triple, tres dobles y tres simples de una selección
        de tres partidos.<br><br>
        7)) ‘Yankee’ es una combinación que incluye una apuesta cuádruple, cuatro triples y seis dobles en una
        selección de cuatro partidos.<br><br>
        8) Un “Canadian” (también conocido como “Super Yankee”) es una combinación, la cual incluye un
        quíntuple, cinco cuádruples, diez triples y diez dobles de una selección de cinco partidos.<br><br>
        9) Un “Heinz” es una combinación, la cual incluye un séxtuple, seis quíntuples, quince cuádruples,
        veinte triples y quince dobles de una selección de seis partidos.<br><br>
        10) Un “Sper Heinz” es una combinación, la cual incluye un séptuple, siete séxtuples, veintiún
        quíntuples, treinta y cinco cuádruples, treinta y cinco triples y veintiún dobles de una selección de siete
        partidos.<br><br>
        11) Un “Goliath” es una combinación, la cual incluye un óctuple, ocho séptuples, veintiocho séxtuples,
        cincuenta y seis quíntuples, setenta cuádruples, cincuenta y seis triples y veintiocho dobles de una
        selección de ocho partidos.<br><br>
        12) En caso necesario, el segundo dígito que aparece después de la coma decimal de las cuotas se
        redondeará en el historial de apuestas del titular de la cuenta decimal más cercano. Sin embargo, el
        pago se efectuará en base a las cuotas reales multiplicadas por la apuesta, ignorando el redondeo
        mencionado anteriormente.`,
    },
    {
        id: 5,
        title: 'Determinación del Resultado',
        content: `1) A la hora de determinar los resultados, BetPlay hará todo lo posible para atenerse a la información
        obtenida de primera mano (durante o exactamente después del evento), a través de retransmisiones
        televisivas, transmisiones en directo (web y a través de otras fuentes) y sitios oficiales. Si la
        información de primera mano y/o las fuentes oficiales omiten estos datos, o si se produce un error obvio
        en la información que se incluye en las fuentes mencionadas anteriormente, el establecimiento de la
        oferta de apuesta se basará en otras fuentes públicas. Sin embargo, a no ser que un error claro y
        verificable se detecte en el primer resultado oficial, la resolución de las apuestas no incluirá cambios
        derivados y/o atribuibles, entre otros, a: descalificaciones, penalizaciones, protestas, resultados sub
        judice y/o cambios sucesivos del resultado oficial tras la finalización del evento y el anuncio, incluso
        prelimnar, del resultado.<br><br>
        2) ) a. Resolución de mercados que se mantienen más allá de 1 ronda/fase (ej. Apuestas con respecto
        a la temporada) tendrán en consideración solamente aquellas modificaciones que afecten a las apuestas
        cuya resolución está aún pendiente. Dichas medidas serán hechas públicas por la entidad responsable
        antes de que se dispute la última ronda/fase. Cualquier cambio efectuado tras esta fecha o que afecte a
        las apuestas ya resueltas atendiendo a eventos que se hayan desarrollado durante la competición/evento
        no se tendrán en consideración.<br><br>
        b. A no ser que se especifique en la oferta, que se implique en las normas de la competición o se
        anuncie de antemano como formato oficial de un evento determinado, cualquier cambio del formato por
        defecto del deporte/evento/competición que provoque que BetPlay ofrezca cuotas/líneas/totales
        incongruentes con el formato modificado provocará la anulación de las apuestas que se vean afectadas
        por el cambio de formato.<br><br>
        c. Aquellas ofertas en las que el cambio de formato no imposibilite que la asociación organizadora
        declare un ganador (ej. Ganador de la temporada), al margen de si hay una continuación de la disputa o
        no, una revisión de la duración de la temporada/competición, etc., serán resueltas según los resultados
        indicados por la organización gestora siempre y cuando dichos resultados sean anunciados en los plazos
        abajo indicados y sean congruentes con las cuotas/líneas/totales disponibles en el momento de
        publicación de la oferta.<br><br>
        d. Las siguientes condiciones de resolución se aplicarán en dichos casos:<br><br>
        (i)&nbsp;&nbsp;&nbsp;&nbsp; Si la organización directora declara un resultado relevante en un plazo de 3 meses desde la
        disputa del último encuentro antes de la interrupción (ya sea una clasificación fina, cancelación o
        intención de reanudar el encuentro), se determinarán los mercados de manera coherente;<br><br>
        (ii)&nbsp;&nbsp;&nbsp;&nbsp; En caso de que no haya comunicación/resultado oficial en un plazo de 3 meses desde la disputa
        del último encuentro antes de la interrupción, se determinarán los mercados en conformidad con la
        última clasificación/ránking disponible al margen del número de partidos disputados/fase de la
        competición/fase actual;<br><br>
        (iii)&nbsp;&nbsp;&nbsp;&nbsp; Los mercados que hagan referencia a que un equipo/participante alcanza una fase determinada
        de la competición (por ejemplo, los playoffs) serán consideradas nulas si hubiera cualquier cambio en el
        formato de/número de participante en competición en esa fase en cuestión o si esa fase no se disputa, a
        no ser que un resultado basado en las connotaciones del mercado en el momento de publicación de la
        apuesta ya haya sido determinado y el cambio en el número de encuentros en consideración no influya
        en el resultado de la oferta;<br><br>
        (iv)&nbsp;&nbsp;&nbsp;&nbsp; Aquellos mercados en los que las cuentas dependan/se base en la disputa de una serie completa
        de encuentros (por ejemplo, más/menos victorias durante la temporada regular/puntos en la liga) serán
        declarados nulos si el número de partidos disputados resulta ser diferente al previsto en el momento de
        publicación de la apuesta, a no ser que el resultado ya se haya visto determinado y el cambio en el
        número de encuentros careza de influencia en el resultado de la oferta.<br><br><br>
        3) Los acontecimientos que no hayan sido sancionados o admitidos por las autoridades competentes del
        partido/evento (por ejemplo, goles anulados) no se tendrán en cuenta de cara a la resolución de la
        apuesta. Por regla general, y a menos que la oferta especifique lo contrario, [el Operador] resolverá las
        ofertas en función del momento exacto en el que se interrumpió/reanudó el discurrir de la jugada (según
        corresponda) por el acontecimiento en cuestión (p. ej. el balón está fuera de juego por un saque/saque
        de portería o porque cruza la línea de gol), o el juego sea detenido por el árbitro, lo que suceda antes.
        Para las apuestas que hagan referencia a la acumulación de un acontecimiento en concreto (p. ej.
        número total de saques de esquina) o la ejecución de una acción específica, será necesario que dicho
        acontecimiento tenga lugar durante el intervalo de tiempo especificado (p. ej. que se realice el saque de
        esquina). En tales circunstancias, si el acontecimiento solo se concede, pero no ejecuta, no se tendrá en
        cuenta a la hora de resolver la apuesta.<br><br>
        4) Todas las ofertas de apuesta relacionadas con partidos/eventos que no tengan lugar o cuyos
        resultados se deban a la no comparecencia del contrincante se declararán nulas.<br><br>
        5) En el caso de que se suspenda un evento, todas las ofertas de apuesta que se hayan decidido antes de
        la suspensión y posiblemente no puedan modificarse independientemente de los eventos futuros se
        establecerán según el resultado decidido. Si no se continúa el evento abandonado en menos de 12 horas
        antes de su hora de inicio, todas las ofertas pendientes relacionadas con el evento se considerarán nulas.<br><br>
        6) En el caso de que se suspenda un evento y se programe para empezar desde el principio, todas las
        apuestas que se realicen antes del partido inicial que no hayan podido establecerse a través de los
        resultados del juego previos a la suspensión se declararán nulas, sin tener en cuenta si el partido es
        continuado.<br><br>
        7) A no ser que se indique lo contrario en las normas específicas del deporte o en conjunto con la oferta
        de la apuesta, los eventos específicos que formen parte de torneos/competiciones que no se disputen,
        sean pospuestos y/o aplazados por/a una fecha superior a las 12 horas desde la última fecha prevista por
        la asociación gestora debido a las inclemencias del tiempo, problemas con el público o situaciones
        similares, serán declaradas nulas con las siguientes excepciones, en las que las apuestas continuarán en
        pie:<br><br>
        <ol type="a">
        <li>
        Eventos cuyos horarios de inicio no hayan sido confirmados de manera oficial por la
        asociación gestora en el momento de cursar la apuesta;
        </li>
        <br>
        <li>
        Eventos pospuestos debido a problemas de planificación/retransmisión televisiva pero que
        cuya disputa siga estando prevista en esa misma jornada/ronda (según proceda) y cuyo cambio
        no afecte el orden del encuentro oficial de ninguno de los participantes en la oferta;
        </li>
        <br>
        <li>
        Eventos cuyos horarios de inicio se vean anticipados (adelantados) pero siga estando prevista
        su disputa en la misma jornada/ronda (según proceda) y, sin prejuicio de indicaciones previas y
        otras circunstancias según lo definido en (Section A, Para 5.6), el cambio no modifique el
        orden del encuentro oficial de ninguno de los participantes en la oferta.<br>
        </li>
        </ol>
        Para evitar dudas en la definición de misma jornada/ronda, se interpretará esta como el orden de los
        encuentros tal y como lo indica la asociación gestora, siendo cada encuentro el que represente la
        jornada/ronda en cuestión. Si no se mantuviese dicho orden y se modificase la secuencia de encuentros
        de un modo tal que otros equipos disputasen sus encuentros en dicho lugar y consecuentemente el
        encuentro indicado dejase de ser el siguiente compromiso en dicho torneo/liga/competición de los
        equipos implicados, dejará de ser considerado como la misma jornada/ronda y las ofertas serán
        declaradas nulas. Esto no se aplica a las apuestas de temporada que seguirán siendo válidas siempre y
        cuando el torneo/liga/competición se dispute y compita durante la temporada/año al que hace
        referencia, al margen de posibles cambios en las fechas/jornadas. En caso de series eliminatorias
        (playoffs) o de series de encuentros en los esté previsto que 2 equipos se enfrenten en 2 o más
        encuentros, cualquier modificación en la fecha de disputa de uno de los encuentros será considerada
        como la misma jornada al margen de la fecha de reprogramación, siempre y cuando se respete el orden
        de disputa como local o visitante de las series y el encuentro previsto se dispute en dichas series. En
        caso contrario, las apuestas serán consideradas como nulas.<br><br>
        8) En casos de eventos que no se han completado antes de su conclusión natural, y se da un resultado a
        través de una decisión de la asociación en menos de 12 horas desde el inicio del evento, [el Operador]
        tomará la decisión como el resultado oficial relacionado con el resultado del evento, como 1X2,
        Apuesta sin empate y Dobles siempre que la decisión tomada no altere el resultado de dichas ofertas en
        el momento de abandonar. En dicho caso se reembolsarán las apuestas. Todas las ofertas relacionadas
        con logros de ocurrencias particulares (por ejemplo: Los goles totales, hándicaps, etc.) se declararán
        nulas a excepción de aquellas cuyos resultados se hayan decidido antes de la suspensión y que
        posiblemente no puedan modificarse independientemente de los eventos futuros, que se establecerán
        según el resultado decidido.<br><br>
        9) Todas las ofertas de apuesta relacionadas con partidos/eventos no completados que no hayan sido
        admitidos anteriormente por la autoridad oficial competente (por ejemplo, Amistosos entre clubes) se
        declararán nulas a menos que se dispute al menos el 90% del tiempo regular/reglamentario estipulado,
        consulta (Section B, Para 1.1). Si el partido/evento se suspende una vez finalizado el 90% del
        encuentro, el resultado se basará en la puntuación obtenida en el momento de la suspensión del
        partido/evento.<br><br>
        10) El establecimiento de ofertas de apuesta, tales como, sin limitación, tiros, tiros a puerta, posesión de
        balón, asistencias, rebotes, etc. se basará en la definición con la que la autoridad oficial competente
        publique dichas estadísticas. A menos que se demuestre a través de pruebas no contradictorias, BetPlay
        no se responsabilizará de las reclamaciones que surjan debido a la interpretación personal de dichos
        términos.<br><br>
        11) Al realizar apuestas a "Ganador" o "Posición", las apuestas no se reembolsarán si los
        participantes/resultados no participan o se retiran de un evento (tanto anteriormente como durante el
        evento), a menos que se especifique lo contrario. BetPlay, a su única discreción, se reserva el derecho a
        aplicar la Regla 4 de Tattersalls, tal y como se indica en (Section B, Para 6), a cualquier competición,
        lo cual se establecerá en relación a la oferta de apuesta y/o a la regla específica del deporte.<br><br>
        12) No se aplicarán reembolsos de apuestas, aunque el resultado ganador de un partido/evento sea un
        participante/resultado que no haya estado implicado en las apuestas. En todas las ofertas de apuesta el
        titular de la cuenta tiene la posibilidad de solicitar el precio de un participante/resultado que no aparezca
        indicado. BetPlay, a su única discreción, se reserva el derecho a rechazar dichas solicitudes.<br><br>
        13) En el caso de que un participante sea descalificado o no se le permita participar en una parte/fase
        posterior de un evento/competición, se considerará que la descalificación habrá tenido lugar en el
        momento de la eliminación del participante. No se modificarán los resultados anteriores,
        independientemente de los cambios realizados debido a dichas sanciones. Las apuestas cursadas tras la
        descalificación del participante del evento serán consideradas nulas.<br><br>
        14) Si dos o más Participantes comparten las posiciones finalistas válidas y las cuotas no contemplan el
        resultado de empate, el pago se calculará dividiendo las cuotas entre el número de participantes que
        compartan dichas posiciones y se resolverá consecuentemente. El pago siempre será como mínimo
        similar a la cantidad de la apuesta, a excepción de los casos de "Uno contra uno"; consulta la [Sección
        B, párrafo 2.5] y la [Sección B, párrafo 5.19].<br><br>
        15) En “Apuestas de grupo” (también conocidas como “Lo mejor de X”), todos los participantes
        indicados deberán iniciar el evento para que las apuestas sean válidas.<br><br>
        16) En “Apuestas de grupo” (también conocidas como “Lo mejor de X”), al menos un participante de la
        lista de selección deberá finalizar correctamente el evento para que las apuestas sean válidas. Si este no
        es el caso, y la autoridad competente no sigue los criterios de empate especificados, las apuestas se
        declararán nulas.<br><br>
        17) Para que las apuestas sean válidas, en un "Uno contra uno" entre dos o tres participantes, todos los
        participantes implicados deberán iniciar la ronda o el evento específicos a los que haga referencia la
        apuesta.<br><br>
        18) En un "Uno contra uno" entre dos participantes, todas las apuestas se reembolsarán si ambos
        participantes comparten la misma posición/puntuación o se eliminan en la misma fase de la
        competición, a menos que la autoridad competente siga los procedimientos de empate especificados, en
        cuyo caso, se considerarán válidas.<br><br>
        19) En un "Uno contra uno" entre tres participantes y más de un resultado ganador, las cuotas se
        dividirán entre los resultados que compartan la posición ganadora, independientemente de si el
        resultado neto es inferior a la apuesta del titular de la cuenta.<br><br>
        20) Si se ofrece un "Uno contra uno" entre diferentes rondas/fases, todos los participantes deberán
        participar en la ronda/fase posterior para que las apuestas sean válidas. Si alguno de los participantes
        indicados en la oferta no participase, las apuestas cursadas tras la última aparición activa del
        participante en cuestión serán declaradas nulas.<br><br>
        21) A menos que se indique específicamente, cuando la autoridad competente considere necesario
        incluir rondas, partidos o series de partidos (por ejemplo, Play-offs, Play-outs, Postemporada) tras la
        finalización de la temporada regular con el fin de decidir la clasificación, los ganadores de la liga, la
        promoción/el descenso, etc., [el Operador] tendrá en cuenta los resultados de estos partidos a la hora de
        establecer las apuestas relativas a la clasificación final de la liga, la promoción, el descenso, etc. Por
        ejemplo, las apuestas de temporada al equipo que ganará la NHL harán referencia a los Ganadores de la
        Copa Stanley.<br><br>
        22) Las ofertas que compitan entre sí en relación a los resultados de dos o más personas/equipos
        durante un periodo de tiempo o una competición estipulados, se establecerán únicamente en base al
        resultado de los participantes implicados, ignorando al resto de participantes de la misma
        competición/evento.<br><br>
        23) A menos que se indique específicamente, todas las ofertas referentes al resultado de un único
        jugador en una liga nacional en concreto (por ejemplo, Goles totales del jugador X en la liga Y) o las
        ofertas de apuesta a "Uno contra uno" en las que están implicadas las actuaciones de dos jugadores de
        ligas nacionales, no tendrán en cuenta aquellos eventos que tengan lugar durante los Play-offs, los Play￾outs o la Postemporada finales ni otros partidos, o series de partidos, que tengan lugar tras la temporada
        regular.<br><br>
        24) Las ofertas relacionadas con la cantidad total de acontecimientos/eventos conseguidos por un
        equipo en particular, en los resultados de un único equipo en una liga nacional en concreto (tales como
        Goles totales marcados por el equipo X), en las ofertas de apuesta a "Uno contra uno" en las que están
        implicados los resultados de dos equipos de ligas nacionales (por ejemplo, Mayor número de minutos
        de penalización de la liga X: equipo Y frente a equipo Z) o en un resultado acumulativo de la liga (por
        ejemplo, Equipo que recibirá más tarjetas amarillas en la liga X) no tendrán en cuenta aquellos eventos
        que tengan lugar durante los Play-offs, los Play-outs o la Postemporada finales ni otros partidos, o
        series de partidos, que tengan lugar tras la temporada regular, a no ser que se especifique lo contrario.<br><br>
        25) En la apuesta relativa a la participación individual de un jugador en una liga determinada (por
        ejemplo, total de goles anotados por el jugador X en la liga Y) o apuestas uno contra uno ["Head to
        Head"] que impliquen la actuación de dos participantes en una liga determinada, a no ser que el
        resultado ya se hubiese alcanzado, se devolverá el monto de la apuesta si ocurrieran alguno de los
        siguientes supuestos a uno de los jugadores: (i) No disputa el partido con su equipo/club en la jornada
        objeto de la apuesta en el 50% o más de los partidos en cuestión por el motivo que fuera, (ii) no
        participa en al menos otro partido una vez cursada la apuesta, (iii) igual la cantidad conseguida por el
        otro jugador a no ser que se ofreciera la opción empate en la apuesta. S podrían tener en cuenta otras
        consideraciones específicas del deporte en cuestión, por lo que se debe revisar la sección específica de
        ese deporte.<br><br>
        26) En una oferta de apuesta al resultado de un único jugador en un evento en concreto (tales como
        Goles totales marcados por el jugador X en un torneo internacional) o en las ofertas de apuesta a "Uno
        contra uno" en las que están implicados los resultados de dos jugadores en eventos específicos, si
        alguno de los siguientes acontecimientos corresponde a alguno de los participantes que aparecen en la
        lista de selección, las apuestas se considerarán nulas: (i) no participa en ninguna fase del evento, (ii) no
        participa al menos en otro partido una vez realizada la apuesta, (iii) suma la misma cantidad que el otro
        participante, a menos que se haya ofrecido la opción de empate/tablas.<br><br>
        27) Durante eventos específicos, BetPlay podrá ofrecer para la apuesta una selección reducida de
        participantes y también podrá incluir opciones de apuesta tales como "cualquier otro", "el contrincante"
        o similar. Esta opción incluye todos los participantes que no aparecen en la lista a excepción de los que
        se mencionan específicamente como disponibles.<br><br>
        28) Las ofertas que hacen referencia específicamente a un participante o a los resultados de un
        participante en un evento en concreto (por ejemplo, Jugador X frente al contrincante) se considerarán
        nulas si los participantes mencionados no participan en la competición.<br><br>
        29) Cualquier tipo de clasificación anterior al evento principal se considerará parte válida de dicha
        competición. Por lo tanto, los participantes que se eliminen en la fase de clasificación serán los
        perdedores con respecto a aquellos que se clasifiquen previamente o pasen la fase de clasificación.<br><br>
        30) Las ofertas de apuesta que requieran en un principio que los participantes compitan en dos o más
        fases/vueltas con el fin de avanzar hacia una fase/ronda posterior de la competición seguirán siendo
        válidas independientemente de los aplazamientos/movimientos de las fechas reales de los partidos,
        siempre que dichos partidos tengan lugar realmente dentro del periodo de tiempo establecido para la
        competición.<br><br>
        31) Las apuestas a un mercado de "Clasificación" que requieren en un principio una única fase/vuelta
        para avanzar hasta una fase/ronda posterior de la competición (incluyendo prolongaciones
        posteriores/partidos adicionales, por ejemplo, repeticiones) se declararán nulas si dicho partido no se
        decide habiendo transcurrido más de 12 horas desde la supuesta hora de inicio.<br><br>
        32) Si el evento cambia la ubicación original y/o de superficie de juego, no se considerará un motivo
        para anular las apuestas a menos que (i) lo especifiquen las reglas específicas del deporte y/o la nueva
        ubicación del desarrollo del evento sea el campo (local) de alguno de los participantes en el partido,
        excepto como se define a continuación. Como regla general, [el Operador] se referirá al equipo local
        (anfitrión) y al equipo visitante (visitante) según la definición proporcionada por la asociación que lo
        rige en ese partido/competición en particular. Las apuestas de partidos jugador en los llamados "campos
        neutros" serán válidas sin que esa información se detalle en la apuesta y/o el posicionamiento de los
        equipos en los marcadores/pantallas. En esos casos donde hay discrepancias entre las posiciones de los
        equipos/participantes en la página web oficial y el tablero/pantalla de apuestas, y dichas discrepancias
        causan un efecto significante en las cuotas del partido/competición [el Operador] anulará las apuestas
        afectadas. Estas eventualidades se consideran únicamente en casos donde la discrepancia tiene efecto
        material y visible en las cuotas. Por ejemplo, en casos en los que los equipos locales y visitantes se han
        intercambiado en un partido de hockey sobre hielo [el Operador] anulará las apuestas. Sin embargo [el
        Operador] considerará válidas las apuestas realizadas en eventos donde la ventaja de jugar como equipo
        local no se considera y en caso de instalaciones neutras. Ejemplos de estos casos incluyen, sin limitarse
        a los mismos: torneos de tenis, luchas de la MMA, competiciones individuales en general, o eventos
        específicos como las fases finales/últimas de las competiciones de equipos que se celebran en
        instalaciones previamente establecidas, como la Superbowl, la fina 4 de la NCAA o la final de la Copa
        de Fútbol italiana, incluso si las instalaciones se pueden considerar como "locales" de alguno de los
        equipos involucrados. En estos casos, dichos eventos se considerarán como jugados en instalaciones
        neutrales y todas las apuestas permanecen sin que importe la posición de los equipos/participantes en la
        página web oficial y su situación en el tablero/pantalla de apuestas.<br><br>
        33) La información referente al sexo de los equipos, la edad y los equipos juveniles, así como a varias
        definiciones de equipos suplentes (por ejemplo, los equipos B y C), se tratará como información
        complementaria. La inclusión (o la falta) de dicha información, así como la exactitud de la misma, no se
        considerarán motivo suficiente para anular las ofertas relacionadas con el partido/evento, siempre que
        no provoque una incoherencia clara en las cuotas ofrecidas.<br><br>
        34) Aunque BetPlay toma todas las precauciones necesarias para garantizar la interpretación más fiel
        posible de todos los componentes implicados en una oferta de apuesta, debe tenerse en cuenta que
        determinados encabezamientos pueden representarse de un modo diferente debido a la diversidad de
        interpretaciones surgidas a raíz de las adaptaciones a otro idioma. Dichas incongruencias lingüísticas no
        se considerarán motivo suficiente para anular las ofertas relacionadas con el partido/evento, siempre
        que no provoquen dudas con respecto a otros participantes. Se aplica lo mismo a los encabezamientos
        que hacen referencia a eventos, nombres de equipos, nombres de patrocinadores, etc.<br><br>
        35) En el caso de las apuestas en las que existen referencias a periodos de tiempo, deben interpretarse
        del siguiente modo: “en los primeros 30 minutos” incluirá todo lo que suceda hasta las 0 horas 29
        minutos y 59 segundos; “entre 10 y 20 minutos” incluirá todo lo que suceda desde los 10 minutos y 0
        segundos hasta los 19 minutos y 59 segundos.<br><br>
        36) Las apuestas referentes a la duración del evento/partido que incluyan dígitos enteros no completos
        (por ejemplo, 88,5 minutos o X,5 rondas) deberán finalizar con el entero completo de la duración
        indicada para que se consideran ganadoras. Por ejemplo: las apuestas a Más/Menos de 88.5 minutos en
        un partido de tenis se establecerán como” Más de” solo si se completa los 89 minutos completos.<br><br>
        37) BetPlay admite que es posible que algunas apuestas requieran que se redondeen los porcentajes, las
        unidades u otros criterios que resulten decisivos a la hora de establecer la apuesta. En dicho caso,
        BetPlay se reserva el derecho a ajustar y establecer las apuestas en consecuencia.<br><br>
        38) Las referencias a goles marcados por jugadores específicos no se tendrán en cuenta si se definen
        como ‘goles en propia puerta’ (marcados en sus propias porterías), a menos que se indique lo contrario.<br>
        39) Las referencias a confederaciones, nacionalidades o similares estarán sujetas a la definición de la
        autoridad competente.<br><br>
        40) Las medallas que obtenga un equipo/país en cada competición contarán como una (1) única medalla
        independientemente del número de miembros que tenga el equipo.<br><br>
        41) Las ofertas relacionadas con la actuación del jugador individual durante un periodo de
        tiempo/torneo en particular (por ejemplo: El total de goles marcados por el jugador X durante la World
        Cup) o comparar actuaciones de 2 jugadores individuales durante el curso de la temporada, (por
        ejemplo: Qué jugador entre el jugador X y el jugador Y anotará más goles durante la temporada),
        requiere que todos los jugadores individuales sean participantes activos en como mínimo una función
        más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean válidas. Las apuestas
        realizadas tras anunciar lesiones, transferencias, intercambios, etc. o cualquier novedad que pueda
        reducir el número de funciones potencialmente sobre un jugador involucrado para que sea apto para la
        competición y por lo tanto afecte las cuotas incluso si solo es teóricamente a favor de cualquier
        resultado individual sin que esas cuotas se hayan ajustado para reflejar el estado actual de la apuesta,
        serán declaradas nulas.<br><br>
        42) Las ofertas en si algunas personas ocuparán una posición/título/trabajo a una fecha determinada (ej.
        el Ministro X todavía trabaja como ministro en el momento Y, el jugador/entrenador seguirá todavía
        con el equipo Y a la fecha Z) se refieren a la persona de que se trate de tomar (o aún ser nominado en)
        posiciones que se muestran sin interrupción desde el momento de la apuesta fue colocado y la fecha
        indicada. Si la persona por cualquier motivo, incluso si la posición antes del plazo indicado, el resultado
        de la apuesta será considerado como no haber tenido lugar. Esto es cierto incluso en el caso en que se
        nombre a la persona/contraído de nuevo en la misma posición/título/cargo, e incluso si el plazo dado, el
        individuo tiene de nuevo la misma posición/título/cargo en la que la apuesta hace referencia. Las
        regulaciones también tienen en cuenta a los jugadores en préstamo.<br><br>
        43) Las apuestas que hagan referencia a "romper" récords precisan que la ocurrencia enumerada se haya
        completado completamente. Igualar el récord no se considera como haber cumplido completamente lo
        establecido. Solo las ocurrencias enumeradas contarán en el resultado final.`,
    },
    // {
    //     id: 6,
    //     title: 'Regla 4 de Tattersall',
    //     content: `1) En el caso de un no corredor o de un no participante, las cuotas de los corredores o participantes
    //     restantes se reducirán según la Regla 4 de Tattersalls.<br>
    //     a. Apuestas a ganar:<br>
    //     Cuotas actuales del corredor retirado/Deducciones en el porcentaje de los beneficios netos
    //     1,30 o menos 75%<br>
    //     Entre 1,31 y 1,40...... 70%<br>
    //     Entre 1,41 y 1,53...... 65%<br>
    //     Entre 1,54 y 1,62...... 60%<br>
    //     Entre 1,63 y 1,80...... 55%<br>
    //     Entre 1,81 y 1,95...... 50%<br>
    //     Entre 1,96 y 2,20...... 45%<br>
    //     Entre 2,21 y 2,50...... 40%<br>
    //     Entre 2,51 y 2,75...... 35%<br>
    //     Entre 2,76 y 3,25...... 30%<br>
    //     Entre 3,26 y 4,00...... 25%<br>
    //     Entre 4,01 y 5,00...... 20%<br>
    //     Entre 5,01 y 6,50...... 15%<br>
    //     Entre 6,51 y 10,00..... 10%<br>
    //     Entre 10,01 y 15,00.... 5%<br>
    //     15,01 o más Sin deducciones<br>
    //     b. Apuestas a posición<br>
    //     • Cuotas actuales del corredor retirado/Deducciones en el porcentaje de los beneficios netos
    //     1,06 o menos 55%<br>
    //     Entre 1,07 y 1,14...... 45%<br>
    //     Entre 1,15 y 1,25...... 40%<br>
    //     Entre 1,26 y 1,52...... 30%<br>
    //     Entre 1,53 y 1,85...... 25%<br>
    //     Entre 1,86 y 2,40...... 20%<br>
    //     Entre 2,41 y 3,15...... 15%<br>
    //     Entre 3,16 y 4,00...... 10%<br>
    //     Entre 4,01 y 5,00...... 5%<br>
    //     5,01 o más Sin deducciones<br>
    //     2) En el caso de que existan dos o más no corredores o no participantes, la reducción total no debe
    //     superar el 75%. En este caso, la deducción se basará en las cuotas totales de los corredores retirados.`,
    // },
    // {
    //     id: 7,
    //     title: 'Quinielas',
    //     content: `1) Para consultar la lista completa de los Términos y condiciones de Supertoto, haz clic aquí.<br>
    //     2) Para consultar la lista completa de los Términos y condiciones de Superscore, haz clic aquí.`,
    // },
] 