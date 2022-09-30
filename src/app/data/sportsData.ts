import { ISportsData } from "../interfaces/Data.interface";

export const sportsData:Array<ISportsData> = [
    {
      id: 1,
      title: 'Fútbol',
      img: 'assets/logo_Deportes/logo_Futbol_Cut.jpg',
      content: `1) Primer/Siguiente Goleador - Las apuestas referentes un jugador en particular que es el autor del gol indicado
            dentro del periodo correspondiente, o por ser el primer goleador de su equipo (ejemplo: "primer Goleador -
            equipo X”). Las apuestas serán reembolsadas con respecto a los jugadores que no participan en el partido o que
            entran en el campo después que el gol indicado fuera anotado. Los goles en su propia meta no cuentan para el
            establecimiento de esta oferta de apuesta. Si el gol en la que la apuesta se refiere es un gol en su propia meta, el
            jugador que marcó el siguiente gol que no es un gol en su propia meta y cumple con los parámetros de la apuesta
            se considerará el resultado ganador. En caso que no existan goles (o más goles, según el caso), los cuales no sean
            en propia meta y se cumplan el resto de parámetros de la apuesta, todas las apuestas se consideraran perdedoras,
            a no ser que la opción correspondiente fuera parte de la oferta.<br><br>
            2) Último Goleador - Las apuestas hace referencia a un jugador en particular que es el autor del último gol, o
            durante un período determinado de evento (por ejemplo, "El último gol en el partido" o "el último gol en la
            segunda parte "), o para ser el último goleador de su equipo (ejemplo: " ultimo Goleador - equipo X) " las
            apuestas serán reembolsadas con respecto a los jugadores que no participan en el partido o que entran en el
            campo después que el último gol fue anotado. Los goles en su propia meta no cuentan para el establecimiento de
            esta oferta de apuesta. Si el gol en la que la apuesta se refiere es un gol en su propia meta, el jugador que marcó
            el siguiente gol que no es un gol en su propia meta y cumple con los parámetros de la apuesta se considerará el
            resultado ganador. Donde ningún gol está/están marcados (o no más goles, según el caso) y que no son goles en
            su propia meta, y cumplir con los demás parámetros de la oferta de apuestas, todas las apuestas se considerarán
            perdidas.<br><br>
            3) "Scorecast" es un tipo de apuesta en el que es posible apostar por un acontecimiento en concreto (por ejemplo, 
            Primer goleador) y, al mismo tiempo, por otro acontecimiento del mismo evento o de un evento relacionado (por 
            ejemplo, Resultado correcto). Si las apuestas se refieren al primer o último goleador, los términos y condiciones
            establecidos en (Section C, Para 14.1) y (Section C, Para 14.2) se aplican, si los hubiere. Las apuestas serán
            reembolsadas en los jugadores que no participan en el partido en absoluto. En todos los demás casos, las
            apuestas siguen siendo válidas, independientemente del momento de la inclusión/sustitución del jugador. Las
            apuestas se anularán si el gol en cuestión es en propia meta.<br><br>
            4) A menos que se especifique lo contrario, o se indique en conjunción con la oferta de la apuesta, todas las
            apuestas realizadas antes del inicio del partido relacionadas con si un jugador específico conseguirá marca un
            número de goles, para ser válidas requieren que los jugadores mencionados jueguen desde el inicio del partido.
            Las apuestas de tipo similar realizadas cuando el partido en cuestión ha comenzado se considerarán nulas si los
            jugadores mencionados no participan en el partido por cualquier motivo tras la aceptación de apuestas. Los goles
            en propia puerta no contarán como goles marcados por el jugador seleccionado.<br><br>
            5) En todas las apuestas relacionadas con tarjetas amarillas/rojas, puntos por tarjeta, etc., solo serán válidas 
            las tarjetas que se muestren a los jugadores que en ese momento estén en el campo. Las tarjetas, las medidas
            disciplinarias o las suspensiones que se impongan a otras personas que en el momento de la sanción no estén, o
            no deberían estar, jugando en el campo, así como las medidas disciplinarias que se tomen una vez finalizado el
            partido oficialmente, no se tendrán en cuenta.<br><br>
            6) A menos que se especifique lo contrario, o se indique en conjunción con la oferta de la apuesta, todas las
            apuestas relacionadas con la disciplina realizadas antes del inicio del partido relacionadas con un jugador
            específico (tarjeta amarilla, tarjeta roja, número de faltas), para ser válidas requieren que los jugadores
            mencionados jueguen desde el inicio del partido. Las apuestas de tipo similar realizadas cuando el partido en
            cuestión ha comenzado se considerarán nulas si los jugadores mencionados no participan en el partido por
            cualquier motivo tras la aceptación de apuestas.<br><br>
            7) Los "Puntos por tarjeta" de las apuestas prepartido se calculan según las siguientes reglas: Tarjeta amarilla =
            10 puntos, Tarjeta roja = 25 puntos. El número máximo de puntos para un jugador es 35.<br><br>
            8) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
            de puntos conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
            curso de un partido (por ejemplo: Cuál de entre el jugador X y el jugador Y anotará más goles), requieren que
            todos los involucrados jueguen desde el inicio del partido para que las apuestas sean válidas.<br><br>
            9) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de puntos conseguidos
            por el jugador X durante la World Cup) o comparar actuaciones de 2 jugadores individuales durante un<br>
            periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
            más touchdowns durante la liga), requiere que todos los jugadores individuales sean participantes activos en
            como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean válidas. Las
            apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones potencialmente sobre un
            jugador involucrado para que sea apto para la competición (como lesiones/intercambios/novedades de cambios)
            y por lo tanto afecte las cuotas incluso si solo es teóricamente a favor de cualquier resultado individual sin que
            esas cuotas se hayan ajustado para reflejar el estado actual de la apuesta, serán declaradas nulas.<br><br>
            10) Todas las ofertas referentes a Totales del torneo (como Goles, Saques de esquina, Tarjetas, Penaltis, etc.) se
            establecerán en base a las estadísticas oficiales de la autoridad competente. A menos que se indique lo contrario,
            las cantidades acumulativas de dichas apuestas incluirán prolongaciones (por ejemplo, Prórroga), pero no los<br>
            Lanzamientos de penalti.<br><br>
            11) A menos que se indique específicamente, todas las apuestas referentes a un equipo en particular que gane un
            número/una selección de trofeos en la misma temporada se basarán en los resultados de dicho equipo en las
            siguientes competiciones: la liga nacional, el equivalente correspondiente a la FA Cup y la League Cup, así
            como la Liga de Campeones o la Europa League. Otros trofeos (por ejemplo, la Supercopa nacional y la
            Supercopa de Europa, el Mundial de Clubes) no se tendrán en cuenta.<br><br>
            12) El "Doblete nacional" se considera la victoria del equipo en el equivalente correspondiente a la liga nacional
            en cuestión y a la FA Cup.<br><br>
            13) A afectos de la resolución, las apuestas que hagan referencia al número de tarjetas mostradas por el árbitro
            contarán de la siguiente forma:<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Tarjeta amarilla = 1<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Tarjeta roja = 2<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Una tarjeta amarilla y una roja = 3<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Dos tarjetas amarillas y una roja = 3<br><br>
            El número máximo de tarjetas por jugador es de 3. Solo se tendrán en cuenta las tarjetas mostradas a los
            jugadores actualmente aptos, según C.14.5.<br><br>
            14) Las apuestas en si un jugador (s) en particular logró marcar desde ciertas áreas del campo (por ejemplo, fuera
            del "área de penal") se ajustará de acuerdo con la posición de la pelota cuando la pelota salió golpeado por el
            jugador, sin tener en cuenta las desviaciones que pudieran cambiar la trayectoria de la pelota con respecto al tiro
            inicial. Para mayor claridad, se debe entender que los límites del "área de penalti" deben ser considerados como
            parte del área. Por lo tanto, si se produce un tiro mientras la pelota está por encima o incluso llave incluso
            parcialmente en línea, el tiro no se considerará que ha ocurrido fuera del área.<br><br>
            15) Las apuestas relativas a si un jugador (o jugadores) le da al larguero, al poste o a cualquier otra parte que
            limite la zona de gol se considerarán como ganadas si el disparo no termina en gol inmediatamente después de
            haber golpeado la superficie objeto de la apuesta. Solo se tendrán en consideración los disparos a la portería
            contraria defendida por el equipo contrario del jugador (o jugadores) en cuestión. Si un jugador efectúa un
            disparo que golpea en el poste de la portería defendida por su propio equipo no se considerará como válido en
            relación con la apuesta en cuestión.<br><br>
            16) Durante ciertos eventos BetPlay podría decidir de ofrecer una pequeña selección de participantes para
            apostar (por ejemplo, un jugador fuera de la lista del equipo X) o un solo participante como una representación
            de todo el equipo (Por ejemplo: "cualquier jugador del equipo X"). En ambos casos, para los efectos del
            establecimiento, todos los miembros del equipo que no figuran deben ser considerados titulares (y se pagarán
            como tal), incluyendo los sustitutos independientemente de que participen en el partido o no.<br><br>
            17) Las apuestas en el rendimiento de los jugadores que empiezan el partido en el banquillo se considerarán
            nulas si el jugador está titular o no participa en el partido en absoluto.<br><br>
            18) En ofertas como Siguiente goleador, Siguiente jugador amonestado con tarjeta, Siguiente asistencia y
            Jugador del partido, las apuestas se reembolsarán si el jugador elegido no participa en el partido o no ha tenido la
            posibilidad de conseguir lo establecido en el epacio de tiempo indicado.<br><br>
            19) Las apuestas sobre el siguiente asistente para un gol en particular se considerarán nulas si la federación
            responsable considera que el gol en cuestión no fue objeto de una asistencia, es un gol en propia meta y/o no se
            marcan más goles en el partido en el espacio de tiempo indicado.<br><br>
            20) Las apuestas relativas a la transformación y/o al resultado de las tandas de penaltis se resolverán según lo
            ocurrido en el terreno de juego atendiendo a las reglas de los organizadores de dicho evento; en el caso de las
            tandas de penaltis, estas serán válidas al margen del formato para su desarrollo que los organizadores decidan.
            Las apuestas seguirán siendo válidas en caso de que se mande repetir el penalti, siendo válido el resultado del
            nuevo lanzamiento.<br><br>
            Como norma general, el resultado se basará en el principio según el cual a no ser que el penalti se transforme y
            se conceda el tanto (y resuelta la apuesta consecuentemente), la primera persona/objeto/ubicación (si procediese) 
            que el balón toque en primer lugar tras el golpeo se considerará el resultado ganador al margen de las demás
            personas/objetos que el balón pudiere tocar en su trayectoria tras el primer contacto. Los siguientes ejemplos
            sirven como norma general para resolver las apuestas:<br><br>
            “Gol” sería la opción ganadora en caso de que se produzcan las siguientes circunstancias ante un penalti
            transformado:<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Cualquier penalti que termina en gol sin que haya sido desviado;<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• El portero toca el balón pero termina en gol;<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• El balón tova la madera y termina en gol;<br><br>
            “Parada” sería la opción ganadora en caso de que se produzcan las siguientes circunstancias ante un penalti
            transformado:<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• El portero desvía el lanzamiento de penalti fuera de la portería;<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;• El portero desvía el lanzamiento de penalti al palo/larguero.<br><br>
            "A la madera" sería la opción ganadora en caso de que se produzcan las siguientes circunstancias:<br><br>
            1) El balón golpea la madera antes de que lo toque/lo ataje el portero;<br><br>
            2) El balón golpea la madera y sale fuera de la portería.<br><br>
            "Otro fallo" sería la opción ganadora en caso de que el balón, sin ser desviado por el portero o la madera, acabe
            fuera de la portería:<br><br>
            La excepción a las circunstancias arriba indicadas sería durante las tandas de penaltis si el balón toca la madera,
            golpea al portero y termina en gol, se consideraría como gol mientras que si esa situación ocurre en cualquier
            otra situación durante el encuentro que no sea la tanda de penaltis, el jugador que efectúe el disparo se
            considerará que falló y "a la madera" sería la opción ganadora.<br><br>
            21) Cualquier decisión que se base en el Videoarbitraje (VAR) y que provoque un conflicto con la decisión
            inicialmente sancionada por los colegiados sobre el campo (incluyendo la aplicación de la ley de la ventaja antes
            de revisar el vídeo) y que alteren el devenir del encuentro en el momento de realizar la apuesta provocarán que
            las apuestas realizadas durante el periodo de tiempo transcurrido entre el incidente inicial y la decisión final del
            árbitro serán consideradas nulas a no ser que las probabilidades ofrecidas en dicha apuesta no se vean afectadas
            por el uso del VAR o ya se hayan tenido en cuenta en las probabilidades ofertadas en el momento de la
            realización de la apuesta. La resolución de las demás apuestas que no se vieran afectadas, incluyendo aquellas
            determinadas por cualquier jugada entre el momento del incidente original y la decisión tomada tras consultar el
            VAR que no se viesen influidas/alteradas por el VAR seguirán siendo válidas.<br><br>
            En lo relativo a los resultados, las revisiones del VAR y las decisiones derivadas de estas se considerarán que
            ocurrieron en el momento original en el que el VAR hubiera sido empleado incluso si la jugada no se hubiera visto 
            interrumpida de manera inmediata. (El Operador) se reserva el derecho, en conformidad con la (Sección
            A, Párrafo 6.2) de modificar las ofertas previamente resueltas si dicho resultado fuera inexacto tras la revisión
            final del árbitro teniendo en cuenta que dicha decisión se toma y comunica antes de la conclusión del encuentro
            y/o del periodo de tiempo indicado.<br><br>
            Para evitar dudas, (El Operador) considerará que se hizo uso del VAR si se entiende, por los gestos del árbitro
            (que detiene el partido para observar lo ocurrido) y/o se confirma por parte de la organización del encuentro a en
            el acta del partido que se hizo uso del VAR. En los casos en los que no quede claro que se hizo uso del VAR
            debido a la falta de cobertura televisiva o a informes contradictorios, (El Operador) resolverá la apuesta según
            la información aportada en la retransmisión del encuentro y fuentes de confianza atendiendo a principios de
            equidad.<br><br>
            22) Para resolver apuestas, los mercados relativos al equipo que verá la próxima tarjeta (amonestación) y/ o
            "tarjetas totales" considerará siempre una tarjeta roja como 2 tarjetas amarillas y actuará en consecuencia. Los
            siguientes ejemplos se presentan a modo de explicación:<br><br>
            <ul>
            <li>
            La primera tarjeta de un partido es una roja directa. El equipo amonestado ganará las instancias
            "primera tarjeta del encuentro" y "segunda tarjeta del encuentro";
            </li>
            <br>
            <li>
            La primera tarjeta de un partido es una amarilla seguida de una roja directa al mismo jugador
            sin hubiese visto una segunda amarilla. El equipo amonestado ganará las instancias "primera
            tarjeta del encuentro", "segunda tarjeta del encuentro" y "tercera tarjeta del encuentro".
            </li>
            <br>
            <li>
            La primera tarjeta de un partido es una amarilla seguida de una segunda amarilla que conlleva
            una roja al mismo jugador. El equipo amonestado ganará las instancias "primera tarjeta del
            encuentro", "segunda tarjeta del encuentro" y "tercera tarjeta del encuentro".
            </li>
            <br>
            </ul>
            23) Los mercados que hagan referencia a un jugador determinado que será el próximo amonestado considerarán
            el resultado de la apuesta según el orden de los hechos en los que dicho jugador es amonestado/expulsado por el
            árbitro. El color de la tarjeta que le muestre el árbitro no tendrá valor en esta oferta, siendo el criterio definitivo
            el orden en el que el jugador es amonestado por el árbitro en el acta. Para resolver la apuesta es posible que se
            considera que un mismo jugador aparezca dos veces como "próximo jugador en ver una tarjeta" si ambas
            amonestaciones ocurren en sendos lances del juego. Si en el mismo lanza dos o más jugadores son amonestados,
            la apuesta se considerará como nula.<br><br>
            24) Cualquier referencia a “tiros libres”, bien sea cuando se presenten como evendo independiente o como
            suceso, tendrán también en consideración situaciones concedidas por fueras de juego y otras faltas excepto las
            señaladas como penalti.<br><br>
            25) Las ofertas relacionadas con jugadores específicos que jueguen el partido completo requieren que el jugador
            o jugadores mencionados comiencen el partido para ser válidas. Para establecer la validez, las apuestas solo se
            resolverán como SÍ si los jugadores mencionados no son sustituidos o expulsados durante el tiempo
            reglamentario. El tiempo añadido si existe no cuenta.`,
      
    },
    {
      id: 2,
      title: 'Baloncesto',
      img: 'assets/logo_Deportes/logo_Baloncesto_Cut.jpg',
      content: `1) Una apuesta a baloncesto se determina en base al resultado obtenido tras la prórroga, a menos que se indique
            lo contrario.<br><br>
            2) Las apuestas referentes al resultado del partido (también denominadas apuestas a “Victoria”) con empates que
            se deciden en dos o más enfrentamientos anularán la oferta “Incluyendo prórroga” en el caso de que el partido
            acabe en empate y no vuelva a jugarse ni un minuto más de dicho partido.<br><br>
            3) En un partido con varias vueltas, todos los puntos obtenidos durante la prórroga se tendrán en cuenta para el
            resultado final de dicho partido en concreto.<br><br>
            4) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
            de puntos conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
            curso de un partido (por ejemplo: Cuál de entre el jugador X y el jugador Y conseguirá más rebotes), requieren
            que todos los involucrados jueguen una parte activa avanzada en el partido aplicable para que las apuestas sean
            válidas.<br><br>
            5) Todas las ofertas referentes a Totales del torneo (como Puntos, Rebotes, Asistencias, etc.) se establecerán en
            base a las estadísticas oficiales de la autoridad competente. A menos que se indique lo contrario, las cantidades
            acumulativas de dichas apuestas incluirán las prolongaciones posteriores (por ejemplo, la prórroga).<br><br>
            6) Todas las ofertas de "partido" de NBA y NCAA solo se considerarán válidas si hay menos de 5 minutos
            restantes de partido programado en el 4.º cuarto/2.ª parte, lo que aplique. Se efectuará la excepción de aquellas cuyos 
            resultados se hayan decidido antes de la suspensión y que posiblemente no puedan modificarse
            independientemente de los eventos futuros, que se establecerán según el resultado decidido.<br><br>
            7) A menos que se establezca específicamente o sea implícito en las características de la oferta, las decisiones de
            las apuestas de temporada se basarán en las clasificaciones, definiciones y reglas de resoluciones a seguir según
            la NBA.com, o la página web oficial de la competición (como sea aplicable).<br><br>
            8) Las Apuestas de temporada, sin importar que incluyan resultados obtenidos durante los Playoffs o demás, así
            como las ofertas referidas a equipos en particular o actuaciones de jugador seguirán siendo válidas sin que
            interfieran los eventuales cambios en los intercambios de jugadores, movimientos del equipo, cambios de
            nombre, duración de la temporada o formato de playoff en cualquier momento de la temporada.<br><br>
            9) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de puntos conseguidos
            por el jugador X durante los Playoffs) o comparar actuaciones de 2 jugadores individuales durante un
            periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y ganará más
            rebotes durante la temporada normal), requiere que todos los jugadores individuales sean participantes activos en
            como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean válidas. Las
            apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones potencialmente sobre un
            jugador involucrado para que sea apto para la competición (como lesiones/intercambios/novedades de cambios)
            y por lo tanto afecte las cuotas incluso si solo es teóricamente a favor de cualquier resultado individual sin que
            esas cuotas se hayan ajustado para reflejar el estado actual de la apuesta, serán declaradas nulas.<br><br>
            10) Las apuestas con doble resultado (como predecir el marcador en el primer tiempo combinado con el
            resultado al final del 4º cuarto) no tendrán en cuenta los resultados derivados del tiempo añadido.<br><br>
            11) A menos que se especifique en conjunción con la oferta de la apuesta, las apuestas a los resultados
            relacionados con la 2.ª parte, solo considerarán los puntos y ocurrencias generadas/obtenidas durante el periodo
            de tiempo especificado y no considerarán puntos y ocurrencias generadas/obtenidas durante el tiempo extra.<br><br>
            12) En términos de resolución, un "doble-doble" es considerado cuando el jugador registra 10 o más en como
            mínimo 2 de estas categorías en un solo partido (incluyendo el tiempo extra si lo hay): Los puntos conseguidos,
            los rebotes ganados, asistencias, robos y/o tapones. Un "triple-doble" es considerado cuando el jugador registra
            10 o más en como mínimo 3 de estas categorías en un solo partido (incluyendo el tiempo extra si lo hay):`,
    },
    {
      id: 3,
      title: 'Tenis y Deportes de Raqueta (Bádminton, Rackleton, Squash y Tenis de Mesa)',
        img:'assets/logo_Deportes/logo_Tenis_Cut.jpg',
        content: `1) Todas las apuestas seguirán siendo válidas durante el periodo de tiempo en el que tenga lugar el partido/la
        oferta del torneo, independientemente de los cambios que puedan producirse (antes o durante el partido), las
        condiciones (al aire libre/bajo techo) y/o el tipo de superficie, a menos que se haya llegado a otro acuerdo.<br><br>
        2) Las ofertas de apuesta a "1X2" se basan en el principio general de progreso en el torneo o ganador del torneo,
        según la fase de la competición a la que haga referencia el partido. El jugador/equipo que pase a la siguiente
        ronda o gane el torneo será el ganador de la apuesta independientemente de las retiradas, las descalificaciones,
        etc. Para que estas apuestas sean válidas, debe completarse al menos una serie.<br><br>
        3) Las apuestas a “Más/Menos de” y "Handicap" en partidos sin finalizar cuyos resultados ya se hayan
        establecido antes de la suspensión y/o cualquier reanudación del juego que posiblemente no produzca un
        resultado diferente a dichas ofertas, se establecerán en función del resultado obtenido hasta la suspensión. Para
        calcular estas apuestas, se añadirá la cantidad mínima de acontecimientos que se habrían necesitado para que la
        oferta hubiese finalizado con naturalidad, en función del número de series que se hayan programado para el
        partido. Si este cálculo da paso a una situación en la que ninguna modificación podría afectar al resultado de la
        oferta, se establecerá como tal. Los siguientes ejemplos pueden tenerse en cuenta :<br><br>
        <ul>
        <li>
        Ejemplo 1 - Más/Menos de: Se produce un abandono en un partido de tres sets con el resultado 7-6, 4-4.
        Ofertas: “Juegos totales del set 2: 9,5” (o líneas inferiores a dicha cantidad) y “Juegos totales del partido:
        22,5” (o líneas inferiores a dicha cantidad) se establecerán como ofertas ganadoras con apuestas a “Más de”
        y como ofertas perdedoras con apuestas a “Menos de”. Las apuestas a líneas superiores a esta se declararán
        nulas.
        </li>
        <li>
        Ejemplo 2 - Handicap: Se produce un abandono al comienzo del 3.er set en un partido de 5 sets con el
        resultado 1-1. Las apuestas a +2,5/-2,5 sets se establecerán como ganadoras y perdedoras respectivamente.
        Las ofertas a líneas inferiores a dicha cantidad se declararán nulas.
        </li>
        </ul>
        4) Todas las apuestas a “Resultado correcto” (denominadas Apuestas de set y Apuestas de juego), “Par/Impar” y
        que hagan referencia al ganador de un periodo en concreto del partido (ejemplo “¿Qué jugador ganará el primer
        set?” y “Set 2 - Juego 6: Ganador” requieren que se complete dicha parte del partido en cuestión.<br><br>
        5) Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para
        que las apuestas sean válidas, a excepción de aquellas ofertas cuyos resultados ya se hayan establecido antes de
        la suspensión del juego y cualquier reanudación del juego que posiblemente no produzca un resultado diferente.<br><br>
        6) En un partido de dobles, todas las apuestas se declararán nulas si alguno de los jugadores implicados es
        sustituido por otro.<br><br>
        7) Las referencias a "Grand Slams" se basarán en los torneos de dicha temporada en concreto a los que la ITF
        atribuya dicha definición, independientemente de los cambios que se produzcan en el campo de juego, la fecha,
        etc.<br><br>
        8) A menos que se indique explícitamente, todas las apuestas a partidos de la Copa Davis se anularán en el caso
        de que se jueguen en un formato diferente a “El mejor de 5 sets” (por ejemplo El mejor de 3 sets).<br><br>
        9) Las ofertas relativas a la Copa Davis se ofrecerán suponiendo que dicho enfrentamiento formará parte de la
        “serie de partidos” de la siguiente sesión de individuales disponible, que normalmente consta de dos partidos
        individuales por sesión. Todas las apuestas se cancelarán si se producen cambios en los participantes de los
        partidos de la primera y la segunda serie de partidos (normalmente partidos individuales de viernes),
        independientemente del hecho de que pueda producirse el mismo encuentro en otros enfrentamientos del mismo
        partido o la misma ronda.<br><br>
        10) Los resultados obtenidos en un "Pro Set " sólo serán válidos para las siguientes ofertas: "Match", "Set
        Handicap", "Resulta correcto " y "Total Sets". El resto de ofertas se valorarán como nulas, a excepción de las
        ofertas cuyo resultado ya está determinado.<br><br>
        11) Como regla general, los "tie-breaks" siempre se consideran 1 solo partido, sin tener en cuenta el número de
        puntos necesario para ganar o cuál sea el formato del "tie-break". Los siguientes escenarios de tie-break se
        establecen de la siguiente manera:<br><br>
        • "Tie-break de partido": Normalmente se juega en lugar del set decisivo cuando ambos participantes han ganado
        el mismo número de sets. Para su resolución, se considera un set completo además de un juego y se cuenta
        consecuentemente. Sin embargo, no se considerará como tie-break para establecer las ofertas relacionadas.<br>
        • "Tie-break a 6-6 en el set, primero en llegar a 7 puntos": Para su resolución, se considerará como 1 partido y
        cuenta correspondientemente además de tie-break para establecer las ofertas relacionadas.<br>
        • "Tie-break a 6-6 en el set, primero en llegar a 10 puntos": Para su resolución, se considerará como 1 partido y
        cuenta correspondientemente además de tie-break para establecer las ofertas relacionadas.<br>
        • "Tie-break a 12-12 en el set, primero en llegar a 7 puntos": Para su resolución, se considerará como 1 partido y
        cuenta correspondientemente además de tie-break para establecer las ofertas relacionadas.<br>
        • "Tie-break a 3-3 en el set, primero en llegar a 7 puntos" (también conocido como formato de 4 rápido): Para su
        resolución, se considerará como 1 partido y cuenta correspondientemente además de tie-break para establecer las
        ofertas relacionadas.<br>
        • "Tie-break de dieces": Un partido que consista únicamente en un tie-break con el participante ganador siendo
        uno de los primeros en llegar a los 10 puntos y liderado por un margen de 2. Esto se considera un tie-break y un
        partido completo para establecer las ofertas relacionadas.<br><br>
        12) Las apuestas a Ganar/Posición Cada-Modo hacen referencia al ganador del torneo situado entre el momento
        de la primera publicación del sorteo principal por la asociación organizadora y el comienzo de la competición,
        será reembolsado si el participante enumerado no toma parte en el torneo. Se realiza una excepción para los
        participantes aún involucrados en las fases de clasificación ya que estos serán considerados como participantes
        activos.`
      
    },
    {
      id: 4,
      title: 'Béisbol',
      img: 'assets/logo_Deportes/logo_Beisbol_Cut.jpg',
      content: `1) A menos que se indique lo contrario, las apuestas de béisbol se determinarán en función del resultado
            obtenido teniendo en cuenta las entradas adicionales finales e independientemente de la cantidad de entradas
            jugadas, según lo que indique la respectiva autoridad competente.<br><br>
            2) Las apuestas se declararán nulas en los partidos cancelados o pospuestos que no hayan comenzado, o en el
            caso de un resultado que no se haya publicado doce horas después de la hora de inicio programada.<br><br>
            3) Las apuestas a "Partido", (también llamadas "Moneyline") precisan una cantidad mínima de innings (entradas)
            jugadas, según las normas de la autoridad competente para que la apuesta sea válida y serán nulas en el caso de
            que se produzca un empate después de las entradas adicionales finales. Las demás ofertas que puedan
            establecerse razonablemente (por ejemplo, "Más/Menos de", "Hándicap" y "Par/Impar") se establecerán según el
            resultado obtenido tras las entradas adicionales.<br><br>
            4) Para las apuestas "Más/Menos de", "Hándicap" y "Par/Impar" es necesario que se disputen todos los innings o
            al menos la mitad de los innings previstas si el equipo local lleva ventaja para que las apuestas sean válidas. Esto
            mismo se aplica a todas las ofertas a excepción de aquellas cuyos resultados se hayan decidido antes de la
            suspensión y no puedan modificarse independientemente de los eventos futuros. Se establecerán según el
            resultado decidido.<br><br>
            5) El nombre del lanzador inicial no afecta a la forma en la que se establecen las ofertas.<br><br>
            6) Para establecer las apuestas, las que van dirigidas a la "Primera parte" harán referencia a los resultados
            obtenidos en las primeras 5 entradas. Las 5 entradas deben completarse para que las apuestas sean válidas, a
            excepción de aquellas ofertas cuyos resultados se hayan decidido antes de la suspensión y que posiblemente no
            puedan modificarse independientemente de los eventos futuros, que se establecerán según el resultado decidido.
            Para los encuentros disputados, de manera prevista, en un formato acortado, la primera mitad de los innings se
            acortará, por exemplo las apuestas “primera mitad” en un partido a 7 innings se referirán a los resultados de las
            primeras 4 innings.<br><br>
            7) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
            golpes conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el curso
            de un partido (por ejemplo: Cuál de entre el jugador X y el jugador Y conseguirá más golpes), requieren que
            todos los involucrados jueguen una parte activa avanzada en el partido aplicable para que las apuestas sean
            válidas.<br><br>
            8) A menos que se establezca específicamente o sea implícito en las características de la oferta, las decisiones de
            las apuestas de temporada y torneo o totales de los Playoffs se basarán en las clasificaciones, definiciones y
            reglas de resoluciones a seguir según la MLB.com, o la página web oficial de la competición (como sea
            aplicable). A menos que se indique lo contrario, las cantidades acumulativas de dichas apuestas incluirán las
            prolongaciones posteriores (por ejemplo, entradas adicionales).<br><br>
            9) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de runs conseguidos
            por el jugador X durante los Playoffs) o comparar actuaciones de 2 jugadores individuales durante un
            periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y conseguirá
            más golpes durante la temporada normal), requiere que todos los jugadores individuales sean participantes
            activos en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean
            válidas. Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones
            potencialmente sobre un jugador involucrado para que sea apto para la competición (como
            lesiones/intercambios/novedades de cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a
            favor de cualquier resultado individual sin que esas cuotas se hayan ajustado para reflejar el estado actual de la
            apuesta, serán declaradas nulas.<br><br>
            10) Las Apuestas de temporada, sin importar que incluyan resultados obtenidos durante los Playoffs o demás, así
            como las ofertas referidas a equipos en particular o actuaciones de jugador seguirán siendo válidas sin que
            interfieran los eventuales cambios en los intercambios de jugadores, movimientos del equipo, cambios de
            nombre, duración de la temporada o formato de playoff en cualquier momento de la temporada.<br><br>
            11) Las apuestas sobre el resultado de un periodo de tiempo en particular (por ejemplo, Inning X) o ocurrencias
            conseguidas durante un periodo de tiempo limitado precisan que el periodo especificado se haya completado con
            la excepción de aquellas ofertas cuyo resultado ya ha sido determinado antes de cualquier interrupción y/o la
            continuación del juego no puede provocar cambios en el resultado de las ofertas, que serán resueltas
            correspondientemente. En términos de resolución, un inning (incluidos los innings extra eventuales) que no
            precisa que el equipo local batee más, o no batee, se considera como terminado de manera natural y todas las
            apuestas relacionadas con el inning (por ejemplo: Resultado del inning X, Hándicap (Spread) del inning X,
            Más/Menos Runs (Total) permanecen con la excepción de aquellos que se refieran específicamente a la
            actuación única del equipo local en el inning especificado (por ejemplo: Más/menos Runs (Total) conseguidos por el 
            equipo local en el inning X), que será establecido como nulo si el equipo local no batea durante el inning
            especificado.<br><br>
            12) Durante ciertos eventos [el Operador] puede decidir ofrecer mercados relacionados con el resultado de una
            serie de partidos de la temporada normal consecutivos entre los equipos enumerados durante periodos de tiempo
            específicos. La resolución incluirá los resultados derivados de cualquier "Doubleheader" siempre que se juegue
            dentro del periodo de tiempo especificado. En casos donde no hay disponible la opción de empate para las
            apuestas, estas se declaran nulas si ambos equipos alistados ganan el mismo número de partidos. Todos los
            partidos/eventos programados deben completarse según las reglas de la asociación que los rige para que las
            apuestas sean válidas, a excepción de aquellos cuyos resultados se hayan decidido antes de la suspensión y que
            posiblemente no puedan modificarse independientemente de los eventos futuros, que se establecerán según el
            resultado decidido.<br><br>
            13) Las ofertas que reflejan o confrontan resultados y ocurrencias obtenidas/conseguidas por los equipos o
            jugadores que participan en diferentes partidos que no se enfrentan entre sí (por ejemplo: Equipo que consigue
            más runs en su partido correspondiente), deben completarse según las reglas de la asociación que los rige para
            que las apuestas sean válidas, a excepción de aquellos cuyos resultados se hayan decidido antes de la suspensión
            y que posiblemente no puedan modificarse independientemente de los eventos futuros, que se establecerán según
            el resultado decidido. En casos donde no hay disponible la opción de empate para las apuestas, estas se declaran
            nulas si ambos equipos/participantes alistados obtienen/consigue la misma cantidad.`,
      
    },
    {
      id: 5,
      title: 'Fútbol americano',
      img: 'assets/logo_Deportes/logo_FutbolAmericano_Cut.jpg',
      content: `1) A menos que se indique lo contrario, todas las apuestas a fútbol americano se determinarán en base al
            resultado obtenido una vez transcurrida la prórroga.<br><br>
            2) Todas las ofertas de "partido" solo se considerarán válidas si hay menos de 5 minutos restantes de partido
            programado en el 4.º cuarto/2.ª parte, lo que aplique. Se efectuará la excepción de aquellas cuyos resultados se
            hayan decidido antes de la suspensión y que posiblemente no puedan modificarse independientemente de los
            eventos futuros, que se establecerán según el resultado decidido.<br><br>
            3) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
            de yardas aéreas lanzadas por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
            curso de un partido (por ejemplo: Cuál de entre el jugador X y el jugador Y lanzará Más yardas aéreas),
            requieren que todos los involucrados jueguen una parte activa avanzada aplicable al partido para que las apuestas
            sean válidas.<br><br>
            4) A menos que se establezca específicamente o sea implícito en las características de la oferta, las decisiones de
            las apuestas de temporada se basarán en las clasificaciones, definiciones y reglas de resoluciones a seguir según
            la NFL.com, o la página web oficial de la competición (como sea aplicable).<br><br>
            5) A menos que se especifique lo contrario, una semana/ronda de la NFL programada se considera activa de
            jueves al miércoles siguiente, según los horarios del estadio local. Los eventos/ofertas no completados en el
            periodo mencionado anteriormente se anularán, a excepción de aquellas ofertas cuyos resultados se hayan
            decidido antes de la decisión y que posiblemente no puedan modificarse independientemente de los eventos
            futuros, que se establecerán según el resultado decidido. Las apuestas relacionadas a eventos que han sido programados 
            de nuevo en la misma semana/ronda seguirán siendo válidas siempre que dichos eventos se
            jueguen en el periodo de tiempo descrito anteriormente.<br><br>
            6) Las propuestas del día/semana de partido es donde se puede apostar en las actuaciones y resultados de una
            selección predefinida de equipos y/o jugadores individuales que se produzcan en una gama de partidos/eventos
            en una semana/ronda/día/partido específico (por ejemplo: Total de puntos conseguidos en partidos de una
            conferencia específica, Equipo que ha marcados más/menos, Mercados de recuento de yardas de jugador, etc.).
            Todos los partidos/eventos relacionados (incluidos los que se han vuelto a programar dentro del periodo de
            tiempo anteriormente definido) deben completarse y validarse en la semana/ronda/día/día del partido
            especificado para que las apuestas sean válidas, a excepción de aquellos cuyos resultados se hayan decidido
            antes de la suspensión y que posiblemente no puedan modificarse independientemente de los eventos futuros,
            que se establecerán según el resultado decidido. Además, las ofertas relacionadas con la actuación de jugadores
            específicos requieren que todos los jugadores específicos sean participantes activos en cualquier punto del
            partido aplicable para que las apuestas sean válidas.<br><br>
            7) Las Apuestas de temporada, sin importar que incluyan resultados obtenidos durante los Playoffs o demás, así
            como las ofertas referidas a equipos en particular o actuaciones de jugador seguirán siendo válidas sin que
            interfieran los eventuales cambios en los intercambios de jugadores, movimientos del equipo, cambios de
            nombre, duración de la temporada o formato de playoff en cualquier momento de la temporada.<br><br>
            8) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de yardas de pase
            conseguidas por el jugador X durante los Playoffs) o comparar actuaciones de 2 jugadores individuales durante
            un periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
            más touchdowns durante la temporada normal), requiere que todos los jugadores individuales sean participantes
            activos en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean
            válidas. Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones
            potencialmente sobre un jugador involucrado para que sea apto para la competición (como
            lesiones/intercambios/novedades de cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a
            favor de cualquier resultado individual sin que esas cuotas se hayan ajustado para reflejar el estado actual de la
            apuesta, serán declaradas nulas.<br><br>
            9) Las apuestas con doble resultado (como predecir el marcador en el primer tiempo combinado con el resultado
            al final del 4º cuarto) no tendrán en cuenta los resultados derivados del tiempo añadido.<br><br>
            10) Los mercados de juego ofensivo Primero/Siguiente se definen según las jugadas ofensivas primera/siguiente
            de la pelea (cuando sea aplicable), excepto los penaltis. Si un inicio de partido debe ser repetido por un
            touchdown, las apuestas se resolverán con el resultado del consiguiente inicio. Para establecer los resultados de
            las apuestas, los pasos incompletos/interceptados, los bloqueos o pérdidas de balón de los quarterbacks serán
            considerados como "Jugadas de pase" a menos que el quarterback haya pasado la línea de pelea, en cuyo punto
            se considera "Jugada de run". Las pérdidas de balón en intercambios con el runningback serán consideradas
            "Jugada de run".<br><br>
            11) Las decisiones de las apuestas que se refieran a "Yardas ofensivas" se basarán en el número neto de yardas
            incluyendo las pérdidas de yardas.<br><br>
            12) Las ofertas que hacen referencia a las puntuaciones de equipos que marquen con éxito un número sucesivo
            de veces especificado sin respuesta se considerarán puntos anotados durante el tiempo añadido eventual, pero
            excluyen los PATs (puntos tras touchdowns o conversiones de 2 puntos).<br><br>
            13) "Las ofertas de "Equipos que pidan primero/siguientes tiempos muertos" no tomarán en consideración para
            su resolución los tiempos muertos perdidos a través de otros medios como ataques fallidos, enfrentamientos de
            entrenadores y/o lesiones.<br><br>
            14) Las resoluciones de todas las ofertas de penaltis se basarán en si es aceptado o no el penal. Los penales
            declinados no cuentan.<br><br>
            15) Las apuestas que hacen referencia al resultado de un ataque en particular se declararán como nulas en caso
            de un ataque incompleto. En casos donde el equipo A tiene la pelota y la pierde tras lo cual el quipo B la
            recupera y el equipo A la vuelve a recuperar, el resultado se clasifica como "Cesión". Las cesiones en downs
            (fallo al intentar el 4º down), también se considerarán como "Cesión". Si un punt es derribado por el equipo
            receptor y recuperado por el equipo que patea, las apuestas se resolverán como "Punt".<br><br>
            16) Las apuestas relativas a la consecución de un 1º down hacen referencia únicamente al equipo que esté en ese
            momento pueda alcanzar dicho resultado. El mercado lo resolverá como “SÍ” si se materializase una serie de
            “Downs” ya sea mediante carrera, pase (incluyendo los casos en los que se consigue un touchdown) o una falta
            automáticamente garantiza el 1º down. “Safety”, “field goal” (al margen de si se materializa el field goal o no),
            fumbles o cualquier cambio en la posesión tendrá como resolución de la oferta un “NO”. Cualquier down
            repetido debido a una falta no será considerado como resolutivo en relación con la apuesta a no ser que se realice
            con 5 o menos yardas restantes.<br><br>
            17) La resolución sobre qué equipo conseguirá más yardas de Pase/Carrera se basará en el número bruto de
            yardas lanzadas/recorridas, incluyendo las yardas negativas en las carreras.<br><br>
            18) Para las resoluciones, las apuestas en los anotadores de touchdown requieren que los jugadores enumerados
            sean parte de la alineación activa de ese partido. Las apuestas sobre jugadores que no estén en la alineación
            activa serán devueltas. En casos de "Touchdowns de pase" además de "Pases de touchdown", solo el jugador que
            recibe la pelota será considerado como el anotador del touchdown.<br><br>
            19) Las apuestas basadas en jugadores y otras estadísticas se solventan según los informes oficiales de los
            partidos tal y como se publican tras el partido por la asociación organizadora.<br><br>
            20) A menos que se especifique en conjunción con la oferta de la apuesta, las apuestas a los resultados
            relacionados con la 2.ª parte, solo considerarán los puntos y ocurrencias generadas/obtenidas durante el periodo
            de tiempo especificado y no considerarán puntos y ocurrencias generadas/obtenidas durante el tiempo extra.`,
      
    },
    {
      id: 6,
      title: 'Boxeo',
      img: 'assets/logo_Deportes/logo_Boxeo_Cut.jpg',
      content: `1) Todas las ofertas se realizarán según el resultado oficial que declare la correspondiente autoridad competente
            inmediatamente después de que el locutor lo anuncie al final de la pelea. No se tendrán en consideración arreglos
            realizados al resultado final tras su primer anuncio excepto aquellos que realice la organización oficial para
            rectificar casis claros de errores comunes por el anunciador del ring.<br><br>
            2) En el caso de que el combate se interrumpa por algún motivo entre asalto y asalto, por ejemplo, si se produce
            un abandono antes del inicio del asalto se descalifica a algún boxeador o no se responde a la campana, el
            combate se declarará finalizado una vez terminada la ronda anterior.<br><br>
            3) Las apuestas a combates declarados como "Combate sin decisión" o "Empate técnico" se anularán, a
            excepción de aquellas ofertas cuyos resultados se hayan decidido antes de la decisión y que posiblemente no
            puedan modificarse independientemente de los eventos futuros, que se establecerán según el resultado decidido.<br><br>
            4) Si por algún motivo cambiase el número de asaltos de un combate entre el momento de aceptación de la
            apuesta y la pelea, las ofertas que hagan referencia específicamente a los asaltos, tales como "Apuestas a
            asaltos", "Grupo de asaltos", "Más/Menos de" y "El resultado se decidirá en el último momento" se declararán
            nulas.<br><br>
            5) Las apuestas a asaltos o grupos de asaltos hacen referencia al luchador que ganará por KO (nocaut), TKO
            (nocaut técnico) o descalificación durante dicho asalto o grupo de asaltos. Si por algún motivo se conceden
            puntos antes de que finalicen todos los asaltos programados, o si se descalifica a un boxeador, las apuestas se
            establecerán en el asalto en el que se detuvo la pelea. Las apuestas referentes a "ganar por puntos" solo serán
            ganadoras si se han completado todos los asaltos.<br><br>
            6) Para que un partido se decida por "puntos" (por ejemplo, lo contrario a "decisión"), deberán completarse todos los asaltos. 
            Las demás decisiones (por ejemplo, KO, TKO, retirada, descalificación, no responder a la campana,
            cabezazos, golpe bajo, etc.) provocarán que el boxeador gane el combate sin necesidad de decisión, es decir,
            "antes de la campana".<br><br>
            7) Las apuestas referentes la duración de la ronda/lucha representa el tiempo real empleado en la ronda/combate,
            si es necesario, en función de la duración prevista de la ronda/combate. Por ejemplo, una apuesta en más de 4,5
            rondas en total en un combate de boxeo se liquidará en cuanto que un minuto y medio en la quinta ronda se ha
            terminado.<br><br>
            8) Las peleas confirmadas deben completarse antes de las 23:59 hora local del día siguiente para que las apuestas
            sean válidas. Los cambios de ubicación o instalación no serán argumentos válidos para anular las ofertas.<br><br>
            9) En las ofertas donde sea posible un empate y las cuotas no han sido ofrecidas para dicho resultado, las
            apuestas se considerarán nulas si el resultado es tal. En términos de resolución, las peleas con resultado "Empate
            por mayoría" o "Empate dividido" se consideran empate y las ofertas se ajustarán respectivamente.<br><br>
            10) Las resoluciones de ofertas basadas en estadísticas como "Boxeador X será derribado" o parecidas se
            decidirán según los resultados declarados por el árbitro y no se permitirán interpretaciones personales.`,
     
    },
    {
      id: 7,
      title: 'Críquet',
      img: 'assets/logo_Deportes/logo_Criquet_Cut.jpg',
      content: `<ol type='a'><li>Reglas generales del críquet.<ol>
                <br>
                <li>
            En casos donde no se han ofrecido cuotas para el empate y el partido/oferta termina en empate, las apuestas
            serán decididas según la llamada regla del "empate", donde el pago se calcula tras dividir las cuotas y
            multiplicarlas por la apuesta, sin tener en cuenta si el pago es inferior a la apuesta del poseedor de la cuenta.
            En competiciones donde se usan otros medios para determinar un ganador tras un empate (por ejemplo,
            "Bowl out" o "Super-Over"), las ofertas se decidirán según el resultado tras completar estas prolongaciones.
            La única excepción de esta regla es para las apuestas a "Cuotas del partido" si el empate se produce en los
            días de Test/Primera clase/3, 4 o 5 (donde ambos equipos han completado dos innings cada uno y tienen la
            misma puntuación). Las apuestas a "Cuotas del partido" se saldarán como nulas.
            </li>
            <br>
            <li>
            Para las apuestas de "Total de carreras superior a X" (Más/menos y Pares/Impares), los "extras" y "carreras
            de penalización" (según las tarjetas de puntos del partido) se incluyen para las resoluciones. Las apuestas
            serán nulas si no están completas a menos que se haya determinado un resultado o el over haya llegado a su
            "conclusión natural" (como fin de los innings/declaración). El mercado se refiere únicamente al over
            enumerado (por ejemplo, "5º over" se refiere al over número 5, justo después del over número 4).
            </li>
            <br>
            <li>
            Para las apuestas de "Total de carreras lanzamiento X" (Más/menos y Pares/Impares), los "extras" (pero no
            las carreras de penalización) según las tarjetas de puntos del partido, se incluyen para las resoluciones. Los
            lanzamientos se cuentan desde el inicio del over, y los lanzamientos adicionales (resultantes de los "extras")
            se contarán consecutivamente y por separado (por ejemplo, si el lanzamiento 1 es largo, la siguiente bola se
            considera lanzamiento 2).
            </li>
            <br>
            <li>
            Para las apuestas a "Límite superior a X" (Sí/No), cualquier ocurrencia de la bola golpeando o superando el
            límite sin tener en cuenta si toca el bate será considerado un límite. Esto incluye los largos, exenciones,
            exenciones de vuelta y lanzamientos superiores (por ejemplo, una bola en juego que impacta o supera los límites se 
            considera un sí para ese over). 4 runs que sean "all run" entre el wicket no se contarán como
            límite. Las apuestas serán nulas si no están completas a menos que se haya determinado un resultado o el
            over haya llegado a su "conclusión natural" (como fin de los innings, declaración). El mercado se refiere
            únicamente al over enumerado (por ejemplo, "5º over" se refiere al over número 5, justo después del over
            número 4).
            </li>
            <br>
            <li>
            Para las apuestas de "Wicket superior a X" (Sí/No), el over debe ser completado para que las apuestas sean
            válidas, a menos que haya caído un wicket o los innings alcancen su conclusión natural (por ejemplo, fin de<br>
            los innings, declaración).
            </li>
            <br>
            <li>
            Para las apuestas "Total de lanzamientos largos) (Más/Menos), las conclusiones se basarán en los "Runs"<br>
            conseguido en "Lanzamientos largos" y no en el número de "Lanzamientos largos" logrados. Por ejemplo, si<br>
            un lanzamiento largo alcanza el límite cuenta como 5 lanzamientos largos en total.
            </li>
            <br>
            <li>
            Para las apuestas de "Método de rechazo", las apuestas serán nulas si el jugador se retira debido a una lesión<br>
            o cualquier otro motivo, antes de que caiga el wicket o no haya más wickets.
            </li>
            <br>
            <li>
            Nueva regla<br>
            Para las apuestas de "Más eliminaciones en carrera", las resoluciones se basarán en el equipo que batea, no
            el equipo de campo. (Por ejemplo, los runs out del equipo del jugador eliminado).
            </li>
            <br>
            <li>
            Para las apuestas a "Pares/Impares", se debe lanzar una bola para que la apuesta sea válida.
            </li>
            <br>
            <li>
            Para las apuestas con "ducks", el duck se define como un jugador que ha sido eliminado por una puntuación
            de cero runs. Un jugador que no ha salido por cero runs no es considerado un duck.
            </li>
            <br>
            <li>
            Para las apuestas "Novia en el partido", una novia se considera cualquier exceso de lanzamiento sin runs
            conseguidos. Solo cuentan los overs completados con cero runs. Se deben lanzar un mínimo de lover para
            que las apuestas sean válidas. En términos de resolución, las exenciones de vuelta y las exenciones no se
            aplican a esta oferta de apuesta, según la tarjeta de puntos del partido. Para las apuestas "4 ", no solo el total
            de 4, mayor número de 4, y total de 4 del jugador, cualquier 4 "all run" no cuenta en el total. Los
            lanzamientos largos que llegan al límite y se conceden al bateador contarán. Las bolas no válidas que
            lleguen al límite tras batearlas y se le concedan al bateador se tendrán en cuenta. Leg-byes y byes que llegan
            a los límites no se tienen en cuenta. Wides que llegan a los límites no se tienen en cuenta.
            </li>
            <br>
            <li>
            Los runs de penalización se cuentan para los over, intervalos e innings en términos de resolución, según la
            tarjeta de puntos del partido. Si los runs de penalización no se conceden a un over específico, solo contarán
            para los runs de innings.
            </li>
            </ol>
            </li>
            <br>
            <li>
            Reglas del jugador de críquet
            <ol>
            <br>
            <li>
            Las apuestas a "Mejor anotador" y "Mejor wicket taker" (incluidas todas las variantes de "Equipo local",
            "Equipo visitante", "1.ª entrada" y "2ª entrada") realizadas sobre un jugador que no esté en el 11 inicial serán
            nulas. Las apuestas a jugadores que se hayan seleccionado, pero no bateen o entren en el campo se
            determinarán como apuestas perdedoras.<br>
            En caso de empate, se aplicarán las reglas de empate descritas en la (Sección C, Párrafo 10(a).1).<br>
            <ol type="a">
            <li>
        Adicionalmente se aplicarán a todos los partidos con overs limitados.<br>
            Las apuestas precisan un mínimo de 20 overs lanzados por innings de un partido de un día, a menos
            que el equipo esté completamente fuera o el partido esté completado, o un mínimo de 5 overs
            lanzados de un partido Twenty 20, T10 o Hundred match a menos que el equipo esté
            completamente fuera o el partido esté completado.
            </li>
            <li>
            Adicionalmente, en todos los partidos de Test y 4/5 días se aplicará lo siguiente.<br>
            Las apuestas precisan 50 overs completados para ser válidas, a menos que los innings hayan
            alcanzado su conclusión natural (incluyendo los "inning declaradas").
            </li>
            <li>
            Todas las apuestas a "Mejor Wicket Taker" se resolverán únicamente según el número de wickets
            recibidos sin tener en cuenta el número de runs concedidos.
            </li>
            <li>
            Todas las apuestas a "Mejor Wicket Taker" será nulas si no se reciben wickets por ningún lanzador en
            esos innings.
            </li>
            <li>
            Esta regla excluye cualquier mercado de Torneo o Serie como se cubre en la (Sección C, Párrafo 10.5).
            </li>
            </ol>
            </li>
            <br>
            <li>
            Las apuestas a "Hombre/Jugador del partido" sobre cualquier jugador que no esté en el 11 inicial se
            declararán nulas. Las apuestas a jugadores que se hayan seleccionado, pero no bateen o lancen se
            determinarán como apuestas perdedoras. En caso de empate, se aplicarán las reglas de empate descritas en la
            (Sección C, Párrafo 10(a).1).<br>
            </li>
            <br>
            <li>
            Las apuestas a "Siguiente jugador fuera" y "Primer bateador eliminado" resultarán nulas si el jugador se
            retira debido a una lesión o cualquier otro motivo antes de que caiga el wicket o si no hay más wickets.
            Ambos bateadores nombrados deben batear en la caída del wicket nominado para que la apuesta sea válida.
            </li>
            <br>
            <li>
            Las selecciones de "Más runs" (2 modos y 3 modos) precisan que ambos/todos los jugadores lleguen al
            punto de bateo cuando se lanza una bola, pero no es necesario que se enfrenten a una bola ni que los
            jugadores nombrados hayan boleado juntos, de lo contrario las apuestas serán nulas. En caso de empate, si
            no se ofrece premio por empate, se aplicarán las reglas de empate descritas en la (Sección C, Párrafo
            10(a).1).<br>
            </li>
            <br>
            <li>
            "Las selecciones de "Más wickets" (2 modos y 3 modos) precisan que ambos/todos los jugadores lancen
            como mínimo 1 bola para que las apuestas sean válidas. En caso de empate, si no se ofrece premio por
            empate, se aplicarán las reglas de empate descritas en la (Sección C, Párrafo 10(a).1).
            </li>
            <br>
            <li>
            Las apuestas a "Actuación del jugador" sobre cualquier jugador que no esté en el 11 inicial se declararán
            nulas. La resolución se basa en el siguiente sistema de puntuación:<br><br>
            <ul>
            <li>
            1 punto por run (solo el bateador).
            </li>
            <li>
            10 puntos por pelota recogida (solo el jugador de campo o wicket keeper).
            </li>
            <li>
            20 puntos por wicket (solo el lanzador);
            </li>
            <li>
            25 puntos por stumping (solo el wicket keeper).
            </li>
            </ul>
            <br>
            Adicionalmente, en todos los partidos con overs limitados, todas las apuestas se declararán nulas si el
            número de overs se reduce debido al tiempo (o cualquier otro motivo) desde el número de overs programado
            normalmente en un partido de Twenty 20 o cualquier otro partido con overs limitados. Si el resultado de estas 
            ofertas ya se ha decidido antes de la interrupción y si continúa el juego no puede influir en el resultado
            de dichas apuestas, estas se resolverán correspondientemente.
            </li>
            <br>
            <li>
            Las apuestas de tipo "Jugador recibirá 5 wickets o más/Wickets en total del jugador/Jugador a recibir un
            wicket" realizadas sobre cualquier jugador que no esté en el 11 inicial se declararán nulas. Las apuestas
            también se pueden anular si el jugador no lanza una bola.
            </li>
            <br>
            <li>
            Las apuestas "Jugador realiza un duck" (Sí/No) precisan que el jugador llegue a la zona de bateo mientras se
            lanza una bola, aunque no es necesario enfrentarse a la misma.
            </li>
            <br>
            <li>
            En las apuestas "Jugador que marcará 50 más rápido/Siglo", la resolución se basa en el menos número de
            bolas enfrentadas para alcanzar la cantidad establecida (50 runs o 100 runs). En caso de empate, se aplicarán
            las reglas de empate descritas en la (Sección C, Párrafo 10(a).1).
            </li>
            <br>
            <li>
            En las apuestas "Llegar a X runs", ambos jugadores deben abrir el bateo para que las apuestas sean válidas.
            </li>
            <br>
            <li>
            Las apuestas "Runs en total/Total de 4/Total de 6 del jugador" (Más/Menos) precisan que el jugador llegue a
            la zona de bateo mientras se lanza una bola, aunque no es necesario enfrentarse a la misma. En casos donde
            los innings de un bateador terminan por el tiempo o poca luz, todas las apuestas son resultado determinado
            se declararán nulas. Un resultado se considera decidido si un bateador ha superado el total establecido al
            aceptar la apuesta, ha sido expulsado o se han completado todos los innings/se ha realizado una declaración.
            Por ejemplo, si un bateador llega a 50 "Not-Out" cuando un partido o inning ha concluido debido a poca luz
            o lluvia, todas las apuestas a 50,5 serán anuladas a menos que el partido llegue a su conclusión natural. Sin
            embargo, todas las apuestas a Más de 49,5 se considerarán ganados mientras que las apuesta a Menos 49,5
            se considerarán perdidas. Si un bateador se retira por una lesión o cualquier otro motivo, su puntuación a la
            conclusión de los innings de su equipo se considerará el resultado de esa apuesta. Adicionalmente, en todos
            los partidos con overs limitados, todas las apuestas se declararán nulas si el número de overs se reduce
            debido al tiempo (o cualquier otro motivo) desde el número de overs programado normalmente en un
            partido de Twenty 20 o cualquier otro partido con overs limitados. Si el resultado de estas ofertas ya se ha
            decidido antes de la interrupción y si continúa el juego no puede influir en el resultado de dichas apuestas,
            estas se resolverán correspondientemente.
            </li>
            <br>
            <li>
            Las apuestas de tipo "Jugador consigue 50/Medio siglo" (Sí/No) precisan que el jugador llegue a la zona de
            bateo mientras se lanza una bola, aunque no es necesario enfrentarse a la misma. Se considera que un
            jugador ha consiguido 50 o un "Medio siglo" cuando su puntuación es de 50 o más runs sin que importe que
            consiga un siglo o más. En casos donde los innings de un bateador terminan por las condiciones
            meteorológicas o la falta de luz, todas las apuestas sin un resultado determinado se declararán nulas, a
            menos que el partido haya llegado a su conclusión natural. Si un bateador se retira por una lesión, su
            puntuación a la conclusión de los innings de su equipo se considerará el resultado de esa apuesta.
            Adicionalmente, en todos los partidos con overs limitados, si interviene la lluvia (o cualquier otro retraso)
            provoca que se reduzca el número de innings programados inicialmente en el momento de realizar las
            apuestas, todas las apuestas pendientes (jugador en conseguir 50) se considerarán nulas si la reducción
            consiste en un 10% o más de overs previstos en un partido. Si la reducción es menor al 10% de los overs
            previstos en el momento en el que se aceptó la apuesta, estas serán válidas. Si los innings de un equipo son
            de 10 overs o menos, cualquier reducción de los overs anulará las apuestas. Si el resultado de las apuestas
            estuviera ya decidido antes de la interrupción, sin que la continuación del juego pudiese modificar el
            resutlado de dichas apuestas, estas se resolverán en consecuencia.
            </li>
            <br>
            <li>
            Las apuestas de tipo "Jugador consigue 100/Siglo/200/Doble siglo" (Sí/No) precisan que el jugador llegue a
            la zona de bateo mientras se lanza una bola, aunque no es necesario que se enfrenten a la misma. Un jugador
            consigue 100 o un "Siglo" cuando su puntuación es de 100 o más runs sin que importe que consiga un doble
            siglo o más. Del mismo modo, se considera que un jugador ha conseguido 200 o "Doble siglo" cuando su
            puntuación es de 200 runs o más. En casos donde los innings de un bateador terminan por las condiciones
            meteorológica o falta de luz, todas las apuestas son resultado determinado se declararán nulas. Si un
            bateador se retira por una lesión, su puntuación a la conclusión de los innings de su equipo se considerará el
            resultado de esa apuesta. Adicionalmente, en todos los partidos limitados, si la lluvia (o cualquier otro
            retraso) provoca que se reduzca el número de innings de los programados inicialmente en el momento de
            realizar la apuesta, todas las apuestas abiertas (jugador en conseguir 100/200) se considerarán nulas si la
            reducción consiste en un 10% o más de lo previsto. Si la reducción es menor al 10% de los overs previstos
            en el momento en el que se aceptó la apuesta, estas serán válidas. Si los innings de un equipo son de 10
            overs o menos, cualquier reducción de los overs anulará las apuestas. Si el resultado de las apuestas
            estuviera ya decidido antes de la interrupción, sin que la continuación del juego pudiese modificar el
            resutlado de dichas apuestas, estas se resolverán en consecuencia.
            </li>
            </ol>
            </li>
            <br>
            <li>
            Críquet con overs limitados
            <ol>
            <br>

            <li>
            Si un partido pasa a un día "de reserva", todas las apuestas siguen siendo válidas siempre que el juego
            comience en menos de 48 horas desde el horario de inicio programado.
            </li>
            <br>
            <li>
            Las apuestas a cuotas del partido (Mano a mano) se pagan según el resultado oficial. En caso de empate se
            aplican las reglas "dead heat" explicadas en la Cláusula 1 de las Reglas generales de cricket a menos que se
            usa un método alternativo para determinar al ganador (como Super-Over, Bowl-Off), en cuyo caso el
            resultado se establece según este método. Si el partido se declara como "sin resultado", todas las apuestas
            pendientes se declaran nulas.
            </li>
            <br>
            <li>
            Si es preciso un "Super-Over" o resolución de empate, los runs, wickets y otras estadísticas que se
            produzcan en el Super-Over/resolución de empate no cuentan en el mercado de apuestas (excepto el
            resultado del partido), incluidas las ofertas de apuestas de jugador y totales de equipos (como Mejor
            bateador/Lanzador, runs de jugador, totales de 6, realizar un mínimo de X wickets). Esta regla no se aplica a
            las ofertas de apuesta específicas relacionadas con "Super-Overs" (como Total de carreras Super-Over).
            </li>
            <br>
            <li>
            En las apuestas "Hándicap de partido/Margen ganador", las resoluciones dependen de si el equipo ganador
            batea 1º o 2º. Si el equipo que batea primero gana, se usa el hándicap de carreras para la resolución. Si el
            equipo que batea segundo gana, se usa el hándicap de wickets para la resolución. Todas las apuestas se
            declararán nulas si el número de overs se reduce debido al tiempo (o cualquier otro motivo) desde el número
            de overs programado normalmente en un partido de Twenty 20 o cualquier otro partido con overs limitados.
            </li>
            <br>
            <li>
            En "Mayores 1ºs 6/15 Overs" todas las apuestas se declaran nulas si el número de overs del partido se
            reduce debido al tiempo (o cualquier otro motivo) desde el número de overs programados en el momento de
            aceptar la apuesta (ya sea normal o ya reducido). Si el resultado de estas ofertas ya se ha decidido antes de la
            interrupción y si continúa el juego no puede influir en el resultado de dichas apuestas, estas se resolverán
            correspondientemente. En caso de empate, si no se ofrece premio por empate, se aplicarán las reglas de
            empate descritas en la Cláusula 1 de las Reglas generales del cricket.
            </li>
            <br>
            <li>
            Las apuestas a "Total mayor al 1er X overs" serán nulas si la intervención de la lluvia (o cualquier otro
            retraso) afecta al número de overs en el partido reduciéndolo de los programados inicialmente en el momento de aceptar 
            la apuesta. Si el resultado de estas ofertas ya se ha decidido antes de la interrupción y si
            continuar el juego no puede influir en el resultado de dichas apuestas, estas se resolverán
            correspondientemente.
            </li>
            <br>
            <li>
            Las apuestas a "Pareja inicial con más carreras" precisan que ambas partes completen sus asociaciones
            iniciales con excepción de aquellas situaciones donde ya se ha establecido un resultado. Una asociación de
            apertura se considera iniciada cuando se lanza la primera bola en un inning de equipo, y dura hasta que cae
            el 1er wicket, o si no llega a caer 1er wicket, el inning llega a su conclusión natural. En caso de empate, si
            no se ofrece premio por empate, se aplicarán las reglas de empate descritas en la Cláusula 1 de las Reglas
            generales del cricket.
            </li>
            <br>
            <li>
            Además, todas las apuestas (sociedad de inicio mayor) se considerarán nulas si se reduce el
            número de overs en el partido debido a las condiciones meteorológicas (o por cualquier otro
            motivo) con resepcto al número de overs programado en el momento de aceptar la apuesta (ya
            sea estándar o reducida). Si el resultado de dichas apuestas ya estuviese resuelto antes de la
            interrupción sin que la continuación del juego pudiese modificar el resultado de dichas apuestas,
            estas se resolverán en consecuencia.
            </li>
            <br>
            <li>
            En las apuestas "Caída del siguiente wicket" y "Asociación de apertura" (Más/Menos), si un bateador se
            retira debido a una lesión o cualquier otro motivo antes de que se determine un resultado, todas las apuestas
            realizadas antes de la retirada se declaran nulas, las apuestas recibidas después de la primera bola de la
            asociación se conservan. Un resultado se considera decidido si la asociación total ha superado el total
            establecido al aceptar la apuesta. Si un equipo consigue su objetivo, el total conseguido por el equipo
            bateador será el resultado del mercado. Si una asociación se anula debido al mal tiempo, todas las apuestas
            se conservan, a menos que se detenga el partido. En este caso todas las apuestas donde no se ha determinado
            un resultado se declaran nulas. En relación al número de over a la caída del siguiente wicket, cualquier
            mitad mencionada se refiere a número de overs completo, no a las pelotas específicas lanzadas (por ejemplo,
            over/menos de 5,5 se refiere a "cualquier entrega en over 5 y anterior", o "cualquier entrega en over 6 y
            posterior").<br><br>
            Además, todas (F.O.W) las apuestas serán consideradas como nulas si el número de overs en el partido se
            reduce por las condiciones meteorológicas (o cualquier otro motivo) en relación con el número de overs
            previsto en el momento de cursar la apuesta (ya sea estándar o reducida). Si el resultado de dichas apuestas
            ya estuviese resuelto antes de la interrupción sin que la continuación del juego pudiese modificar el
            resultado de dichas apuestas, estas se resolverán en consecuencia.
            </li>
            <br>
            <li>
            En "Total de carreras - Innings X" (Más/Menos) (como en Total de carreras de equipo), todas las apuestas se
            declaran nulas si el número de overs del partido se reduce debido al tiempo (o cualquier otro motivo) desde
            el número de overs programados en el momento de aceptar la apuesta (ya sea normal o ya reducido). Si el
            resultado de estas ofertas ya se ha decidido antes de la interrupción y si continuar el juego no puede influir
            en el resultado de dichas apuestas, estas se resolverán correspondientemente. Para evitar dudas: Cualquier
            apuesta realizada tras reducir el número de overs se conserva a menos que haya una reducción posterior.
            </li>
            <br>
            <li>
            En "Total de carreras - Innings X, Overs X-X" (Más/Menos) (como en Total de carreras - Equipo local,
            Over 1-15), todas las apuestas se declaran nulas si el número de overs del partido se reduce debido al tiempo
            (o cualquier otro motivo) desde el número de overs programados en el momento de aceptar la apuesta (ya sea normal 
            o ya reducido). Si el resultado de estas ofertas ya se ha decidido antes de la interrupción y si
            continuar el juego no puede influir en el resultado de dichas apuestas, estas se resolverán
            correspondientemente. Para evitar dudas: Cualquier apuesta realizada tras reducir el número de overs se
            conserva a menos que haya una reducción posterior.
            </li>
            <br>
            <li>
            En las apuestas "Total de 4/Total de 6/Límites/Wickets" (Más/Memos), todas las apuestas se declararán
            nulas si el número de overs se reduce debido a las condiciones meteorológicas (o cualquier otro motivo) el
            número de overs programado para el partido en el momento de cursar la apuesta (ya sea estándar o
            reducida). Si el resultado de dichas apuestas ya estuviese resuelto antes de la interrupción sin que la
            continuación del juego pudiese modificar el resultado de dichas apuestas, estas se resolverán en
            consecuencia.<br><br>
            Las exenciones de vuelta y de límite que alcanzan/superan los límites no cuentan de 4 y de 6 no cuentan en
            el Total de 4/6/Límites. Los lanzamientos de más se cuentan para el bateador. Los wides que alcanzan los
            límites no cuenta. No-balls que alcanzan los límites tras bateo se le cuentan al bateador.
            </li>
            <br>
            <li>
            Para las apuestas "Más cuatro/Seis/Largo/Carreras fuera/Límites/Ducks/Extra", si la lluvia (o cualquier otro
            retraso) provoca que se reduzca el número de overs programados inicialmente en el momento de realizar la
            apuesta, todas las apuestas pendientes (Más “X”) se considerarán nulas si la reducción consiste en un 10% o
            más de los previstos. Si la reducción es menos de un 10% de los overs previstos en el momento de cursar la
            apuesta, las apuestas seguirán en pie. Si los innings de un equipo es 10 overs o menos, cualquier reducción
            de overs anulará las apuestas (más “X”). Si el resultado de dichas apuestas ya estuviese resuelto antes de la
            interrupción sin que la continuación del juego pudiese modificar el resultado de dichas apuestas, estas se
            resolverán en consecuencia. Las exenciones de vuelta y de límite que alcanzan/superan los límites no
            cuentan de 4 y de 6 no cuentan en el Total de 4/6/Límites.
            En caso de empate, si no se ofrece premio por empate, se aplicarán las reglas de empate descritas en la
            Cláusula 1 de las Reglas generales del cricket.
            </li>
            <br>
            <li>
            Para las apuestas "Lanzamientos largos/Carreras fuera/Ducks/Extras/Eliminaciones" (Más/Menos), se
            declararán nulas todas las apuestas si el número de overs se viese reducido por causa de las condiciones
            meteorológicas (o cualquier otro motivo) con respecto al número de overs previsto en el partido en le
            momento en el que se aceptó la apuesta (ya sea estándar o reducida). Para los lanzamientos largos (wides) y
            extras, las conclusiones se basarán en los "Runs" conseguido en "Lanzamientos largos" y no en el número
            de "Lanzamientos largos" logrados.
            </li>
            <br>
            <li>
            En el modo "Mayor puntuación individual", todas las apuestas se declararán nulas si el número de overs se
            reduce debido al tiempo (o cualquier otro motivo) desde el número de overs programado normalmente en un
            partido de Twenty 20 o cualquier otro partido con overs limitados, a menos que ya se haya conseguido un
            "Siglo".
            </li>
            <br>
            <li>
            En las apuestas "Equipo del mejor bateador", si la lluvia (o cualquier otro retraso) provoca que se reduzca el
            número de overs en el partido de los programados inicialmente en el momento de realizar la apuesta, todas
            las apuestas pendientes (equipo del mejor bateador) se considerarán nulas si la reducción es de un 10% o
            más overs de los previstos. Si la reducción es de menos del 10% de los overs previstos en el momento de
            realizar la apuesta, se mantendrán las apuestas. Si los innings de un equipo es 10 overs o menos, la
            reducción de overs anulará las apuestas. Si el resultado de dichas apuestas ya estuviese resuelto antes de la
            interrupción sin que la continuación del juego pudiese modificar el resultado de dichas apuestas, estas se resolverán 
            en consecuencia. En caso de empate, si no se ofrece premio por empate, se aplicarán las reglas de
            empate descritas en la Cláusula 1 de las Reglas generales del cricket.
            </li>
            <br>
            <li>
            En las apuestas "Cincuenta/Siglo en el partido" (Más/Menos), si la lluvia (o cualquier otro retraso) provoca
            que se reduzca el número de overs en el partido de los programados inicialmente en el momento de realizar
            la apuesta, todas las apuestas pendientes (cincuenta/siglo en el partido) se considerarán nulas si la reducción
            es de un 10% o más de los previstos. Si la reducción es de menos del 10% de los overs previstos en el
            momento de realizar la apuesta, se mantendrán las apuestas. Si los innings de un equipo es 10 overs o
            menos, la reducción de overs anulará las apuestas (cincuenta/siglo en el partido). Si el resultado de dichas
            apuestas ya estuviese resuelto antes de la interrupción sin que la continuación del juego pudiese modificar el
            resultado de dichas apuestas, estas se resolverán en consecuencia.
            </li>
            <br>
            <li>
            En las apuestas "Mayor número total de carreras en un over/Más carreras en un over" (Más/Menos) las
            apuestas se resuelven con el mayor número de carreras (incluidos extras) en cualquier over de cualquier
            inning del partido. Todas las apuestas se declaran nulas si el número de overs se reduce debido al tiempo (o
            cualquier otro motivo) desde el número de overs programados en el momento de aceptar la apuesta (ya sea
            normal o ya reducido). Si el resultado de estas ofertas ya se ha decidido antes de la interrupción y si
            continuar el juego no puede influir en el resultado de dichas apuestas, estas se resolverán
            correspondientemente.
            </li>
            </ol>
            </li>
            <br>
            <li>
            Apuestas de partidos/partidos de primera clase/partidos de 3, 4 o 5 días.
            <ol>
            <br>
            <li>
            Si un partido es abandonado oficialmente (por ejemplo, debido a condiciones peligrosas en el campo), todas
            las apuestas del partido sin resolver se anulan.
            </li>
            <br>
            <li>
            En las apuestas a "Cuotas del partido" si el empate se produce en los días de Test/Primera clase/3, 4 o 5
            (donde ambos equipos han completado dos innings cada uno y tienen la misma puntuación). Las apuestas a
            "Cuotas del partido" se saldarán como nulas, procesando la devolución de las cuotas.
            </li>
            <br>
            <li>
            En las "Apuesta sin empate", en caso de empate las apuestas son nulas y se reembolsan.
            </li>
            <br>
            <li>
            En las apuestas "Double Chance", en caso de empate las apuestas son nulas y se reembolsan.
            </li>
            <br>
            <li>
            En las apuestas "Más puntos", las ofertas se establecen según quién tiene más puntos concedidos para el
            partido (por ejemplo, Sheffield Shield). En caso de empate, si no se ofrece premio por empate, se aplicarán
            las reglas de empate descritas en la (Sección C, Párrafo 10(a).1).
            </li>
            <br>
            <li>
            Las apuestas a "Pareja inicial con más carreras" precisan que ambas partes completen sus asociaciones
            iniciales con excepción de aquellas situaciones donde ya se ha establecido un resultado. A menos que se
            establezca lo contrario, la pareja inicial con más carreras solo hace referencia a los primeros innings de cada
            equipo. En caso de empate, si no se ofrece premio por empate, se aplicarán las reglas de empate descritas en
            la (Sección C, Párrafo 10(a).1).
            </li>
            <br>
            <li>
            En las apuestas "Caída del siguiente wicket" y "Asociación de apertura" (Más/Menos), si un bateador se
            retira debido a una lesión o cualquier otro motivo antes de que se determine un resultado, todas las apuestas
            realizadas antes de la retirada se declaran nulas, las apuestas serán declaradas como nulas. Un resultado se
            considera decidido si los innings totales han superado el total establecido al aceptar la apuesta. Si un equipo
            declara o consigue su objetivo, el total conseguido por el equipo bateador será el resultado del mercado. Si
            una asociación se anula debido al mal tiempo, todas las apuestas se conservan, a menos que se detenga el
            partido. En este caso todas las apuestas donde no se ha determinado un resultado se declaran nulas. Las
            carreras extras y de penalización concedidas antes de la caída del wicket o durante la asociación según la
            tarjeta de puntos del partido, se contará.
            </li>
            <br>
            <li>
            En las apuestas a "Total de carreras - Innings X" (Más/Menos) (como el Total de carreras del equipo), todas
            las apuestas son nulas si no se lanzan 50 overs, a menos que un inning haya alcanzado su conclusión natural,
            o sea declarado. Si un inning es declarado en cualquier momento, las apuestas serán establecidas en la
            declaración total. Las carreras extras y de penalización concedidas durante los innings según la tarjeta de
            puntos del partido, se contarán.
            </li>
            <br>
            <li>
            Las apuestas de "Carreras de sesión" precisan que se lancen 20 overs en una sesión para ser válidas. Las
            apuestas se establecen según el número de carreras en total en la sesión sin tener en cuenta qué equipo
            consigue las carreras. Las carreras extras y de penalización concedidas durante la sesión según la tarjeta de
            puntos del partido, se contarán.
            </li>
            <br>
            <li>
            Las apuestas de "Wickets de sesión" precisan que se lancen 20 overs en una sesión para ser válidas. Las
            apuestas se establecen según el número de wickets perdidos en total en la sesión sin tener en cuenta qué
            equipo los pierde.
            </li>
            <br>
            <li>
            En las apuestas que incluyan "Sesión", se aplica la siguiente definición de cada sesión a los partidos de un
            día.<br>
            <ul>
            <li>
            Día X, Sesión 1 (Inicio del partido hasta el almuerzo)
            </li>
            <li>
            Día X, Sesión 2 (Inicio del partido hasta el té)
            </li>
            <li>
            Día X, Sesión 3 (Té hasta la eliminación/Cierre del partido por el día)
            </li>
            </ul>
            La siguiente definición de cada sesión a los partidos de un día/noche.<br>
            <ul>
            <li>
            Día X, Sesión 1 (Inicio del partido hasta el almuerzo)
            </li>
            <li>
            Día X, Sesión 2 (Inicio del partido hasta el té)
            </li>
            <li>
            Día X, Sesión 3 (Té hasta la eliminación/Cierre del partido por el día)
            </li>
            </ul>
            </li>
            <br>
            <li>
            En las apuestas "Cierre del partido de Test", cuando el partido termina en empate, el ganador será
            reconocido como "Día 5, Sesión 3". Si un partido es abandonado oficialmente (por ejemplo debido a
            condiciones peligrosas en el campo), todas las apuestas se anulan.
            </li>
            <br>
            <li>
            En las apuestas "Equipo en cabeza tras los primeros innings", ambos equipos deben lanzar o declarar sus
            primeros inning para que las apuestas sean válidas. En caso de empate, si no se ofrece premio por empate, se
            aplicarán las reglas de empate descritas en la (Sección C, Párrafo 10(a).1).
            </li>
            <br>
            <li>
            Las ofertas "Primer siglo en innings" precisan que se lancen 50 overs a menos que ya se haya determinado
            un resultado o los innings hayan alcanzado su conclusión natural (incluidos los innings declarados).
            </li>
            <br>
            <li>
            En los modos "Cincuenta/Siglo/Doble siglo en partido" en los partidos de Test o Primera Clase, las apuestas
            son nulas en los partidos empatados donde el número de overs lanzado es inferior a 200, a menos que ya se
            haya determinado un resultado.
            </li>
            <br>
            <li>
            En los modos "Cincuenta/Siglo/Doble siglo en un partido" en "Local/Visitante 1eros innings" de los partidos
            de Test o Primera Clase, las apuestas serán nulas a menos que los innings lleguen a su conclusión natural
            (incluidos "innings declarados") o ya se haya determinado un resultado.
            </li>
            <br>
            <li>
            En los modos "Cincuenta/Siglo/Doble siglo en un partido" en 1eros innings de partidos de Test o Primera
            Clase, las apuestas serán nulas a menos que ambos innings lleguen a su conclusión natural (incluidos
            "innings declarados") o ya se haya determinado un resultado.
            </li>
            <br>
            <li>
            En los modos "Cincuenta/Siglo/Doble siglo en un partido" en "Local/Visitante 1eros innings" de los partidos
            de Test o Primera Clase, las apuestas serán nulas si el número de innings es menos a 50 o ya se haya
            determinado un resultado.
            </li>
            <br>
            <li>
            Las apuestas "Equipo del mejor bateador" se establecen según el jugador que haya conseguido más carreras
            en el 1º o 2º inning de cualquier equipo, por ejemplo, el equipo con el jugado individual con más carreras en
            el encuentro sin tener en cuenta el resultado final del encuentro. Las apuestas serán nulas en los partidos
            empatados donde el número de overs lanzados sea menor de 200. En caso de empate, si no se ofrece premio
            por empate, se aplicarán las reglas de empate descritas en (Section C, Para 10(a).1).
            </li>
            </ol>
            </li>
            <br>
            <li>
            Apuestas de series/torneos<br>
            <ol>
            <br>
            <li>
            Si no se ofrecen cuotas de empate para la apuesta a "Ganador de la serie" y la serie concluye en empate,
            todas las apuestas serán nulas, a menos que se especifique la regla de "Dead heat" (como se explican en la
            (Sección C, Párrafo 10(a).1)).
            </li>
            <br>
            <li>
            Si un torneo no se completa, pero se declara un ganador o ganadores por el cuerpo gobernante, las apuestas
            se pagan sobre los ganadores como se declare. Se pueden aplicar las reglas de empate descritas en la
            (Sección C, Párrafo 10(a).1). Si no se declaran ganadores todas las apuestas se considerarán nulas.
            </li>
            <br>
            <li>
            Todas las apuestas del torneo incluidas las finales y Playoffs, a menos que se indique lo contrario.
            </li>
            <br>
            <li>
            En las apuestas "Resultado de la serie" (Resultado correcto de la serie), si por cualquier motivo el número de
            partidos en una serie cambia y no refleja el número previsto en la oferta todas las apuestas se considerarán
            nulas.
            </li>
            <br>
            <li>
            En las apuestas "Más carreras de la serie/Recibidor de wicket" y "Mejor bateador/lanzador del torneo",
            donde se produzca un empate, se aplican las reglas del empate Dead Heat como se ha explicado previamente
            en (Section C, Para 10(a).1). No se ofrecerán reembolsos sobre jugadores que no participen. Se debe
            completar como mínimo un partido en el torneo/serie para que las apuestas sean válidas.
            </li>
            <br>
            <li>
            Las apuestas referentes al rendimiento de jugadores/equipos en particular en una Serie/Torneo no tendrán en
            cuenta las estadísticas derivadas de los partidos de calentamiento.
            </li>
            <br>
            <li>
            En las apuestas de "Hándicap de la serie", todas las apuestas se establecen según los "resultados de la serie",
            no por las carreras conseguidas en la serie. Si por cualquier motivo el número de partidos en la serie cambia,
            todas las apuestas se declararán nulas.
            </li>
            <br>
            <li>
            En las apuestas "Gana un Test en la serie" y "Total de victorias/empates en el test”, si por cualquier motivo
            el número de partidos en la serie cambia, todas las apuestas se declararán nulas con la excepción de aquellas
            situaciones donde ya se ha determinado un resultado.
            </li>
            </ol>
            </li>
            </ol>`,
     
    },
    {
      id: 8,
      title: 'Ciclismo (Pista y Ruta)',
      img: 'assets/logo_Deportes/logo_Ciclismo_Cut.jpg',
      content: `1) Las apuestas se establecerán según el ciclista/equipo que logre el primer puesto al final de la etapa o del
            evento.<br><br>
            2) El factor decisivo a la hora de establecer las apuestas será el primer puesto conseguido en el evento
            especificado según las indicaciones de la autoridad competente en el momento de la presentación en el podio, sin
            tener en cuenta las descalificaciones posteriores, los cambios en el resultado oficial, etc.<br><br>
            3) Todas las apuestas a "Uno contra uno" y “Más/Menos de” que hagan referencia a los resultados de uno o
            varios ciclistas en un evento/una etapa se declararán válidas siempre que todos los ciclistas indicados empiecen
            el evento/la etapa en cuestión y al menos uno finalice dicho evento o dicha fase.<br><br>
            4) En el caso de que el número total de etapas de un evento no está completamente terminado, o si los
            organizadores deciden retirar el resultado de ciertos etapas en el cálculo del resultado oficial, entonces las
            apuestas se considerarán válidas cuando el número de etapas excluidos no supere el 25% del número
            predeterminado de etapas (con exclusión de prólogo) al principio de la competición.<br><br>
            5) Todas las apuestas se considerarán válidas si la situación o etapa en la que se las apuestas se refieren, se juega
            el mismo año, a menos que otros arreglos se han acordado.<br><br>
            6) Las apuestas en el rendimiento en una etapa particular independientemente de los cambios que los
            organizadores estimen apropiados de considerar y aplicar para la etapa. La excepción a esta regla es cuando una
            etapa que tiene características especiales (por ejemplo, una etapa de montaña) se modifica por los organizadores
            antes del inicio de la etapa, para una etapa con otras características predominantes (por ejemplo, contrareloj o
            una etapa de baja altura). En este caso, las apuestas que se colocaron antes del anuncio del cambio de fase de
            concepto serán declaradas nulas.<br><br>
            7) A menos que se indique otra cosa, para las apuestas en el rendimiento de un equipo/piloto en particular en un
            evento específico (como el número de victorias total de etapas por equipo/piloto X en el Tour Y) o las apuestas "Uno contra uno " 
            que implican el rendimiento de dos pilotos/equipos en eventos específicos, no se tomará la ocurrencia de eventos con las 
            siguientes designaciones en cuenta: Prologo, contrarreloj por equipos.`,
      
    },
    {
      id: 9,
      title: 'Golf',
      img: 'assets/logo_Deportes/logo_Golf_Cut.jpg',
      content: `1) Todas las apuestas se declararán válidas siempre que el torneo, o la ronda en cuestión a la que haga referencia
            la apuesta, se jueguen en la misma temporada y en los 3 meses siguientes a la úlitma fecha prevista (según el
            horario local del campo), tal y como lo indique la autoridad competente, independientemente de los
            aplazamientos que puedan producirse, a menos que se haya llegado a otro acuerdo.<br><br>
            2) Todas las apuestas referentes a los resultados del torneo, no solo Ganador, Posición, Cada modo, Ganador sin
            X, Apuestas de grupo, Nacionalidad ganadora, Posición final individual, etc. se declararán válidas siempre que el
            número mínimo de hoyos, según la oferta, y según dicte la autoridad competente (por ejemplo, 36 hoyos para
            eventos del European Tour y 54 hoyos para eventos organizados por la PGA Tour), se hayan disputado por los
            jugadores en cuestión y la autoridad competente haya emitido un resultado oficial. Si el formato de un torneo
            cambia para consistir en menos rondas/hoyos de los programados originalmente, todas las apuestas aceptadas en
            dichas ofertas tras el último giro de la última ronda completada será nulas.<br><br>
            3) Las ofertas de apuesta que ya se hayan decidido se declararán apuestas válidas aunque no se hayan jugado 36
            hoyos o la autoridad competente no haya publicado el resultado oficial.<br><br>
            4) Los resultados de los play-offs aprobados oficialmente se tendrán en cuenta de cara a la determinación de las
            ofertas de apuesta del torneo. A menos que se establezca lo contrario, las ofertas relacionadas con la actuación
            dentro de una ronda u hoyo específico no tendrán en cuenta las actuaciones de los Playoffs.<br><br>
            5) Las apuestas realizadas a jugadores que comiencen el torneo pero que se retiren voluntariamente o sean
            descalificados se establecerán como apuestas perdedoras, a menos que el resultado de la oferta a la que haga
            referencia la apuesta ya se haya establecido.<br><br>
            6) Todas las apuestas cursadas con participantes que no compitan se reembolsarán.<br><br>
            7) En las apuestas a ganador que incluyan una selección limitada de participantes, tales como Nacionalidad
            ganadora, Lanzador de seis, Apuestas de grupo, etc., [el Operador] se reserva el derecho a aplicar la Regla 4 de
            Tattersalls a cualquiera que no comience el partido. Si los jugadores mencionados en las apuestas "no se
            clasifican", el jugador con la mejor posición en ese momento de realizar la selección será considerado el
            ganador. Se aplicarán las reglas del empate a excepción de los casos en los que un play-off haya determinado
            una mejor posición finalista, donde sea aplicable.<br><br>
            8) Todas las ofertas de apuesta a "Uno contra uno" exigen que todos los participantes inicien el evento o la ronda
            a los que haga referencia la apuesta.<br><br>
            9) En las apuestas a "Uno contra uno" que solo incluyen dos jugadores, las apuestas se reembolsarán si ambos
            participantes comparten la misma posición finalista y no se ofrece ninguna opción de empate. En las apuestas a
            "Uno contra uno" con tres jugadores, si dos o más participantes comparten la misma posición finalista, las
            apuestas se dividirán según (Section B, Para 5.19).<br><br>
            10) El establecimiento de ofertas de apuesta a "Uno contra uno" que hacen referencia a los resultados de dos o
            más jugadores (por ejemplo, Mejor posición finalista en el torneo) se basará en la mejor posición finalista o en la
            puntuación más baja (según corresponda) que se consigan en el evento o la ronda en concreto a los que
            pertenezca la apuesta.<br><br>
            11) Las referencias a Pasar/No pasar el "corte" requieren un corte/una exclusión oficial por parte de los
            organizadores para que las apuestas sean válidas. En el caso de los torneos en los que se elimina a los jugadores
            en más de una fase, el establecimiento de las apuestas se basará en si el jugador se ha clasificado o no después
            del primer "corte".<br><br>
            12) Las descalificaciones/retiradas de jugadores con anterioridad al corte provocarán que se considere que dichos
            jugadores no han pasado el "corte". Las descalificaciones/retiradas posteriores al "corte" no se tendrán en cuenta
            de cara al establecimiento original de las apuestas a "Pasará el corte".<br><br>
            13) En las apuestas a "Uno contra uno" basadas en la mejor posición finalista del torneo, en el caso de que un
            jugador no pase el corte, el otro jugador será declarado ganador. Si ninguno de los participantes pasa el "corte",
            el jugador con la menor puntuación en el "corte" será declarado ganador. Si ninguno de los jugadores pasa el
            "corte" con la misma puntuación, se anulará la apuesta. Los jugadores que sean descalificados después del
            "corte" habrán derrotado a los jugadores que no hayan pasado el "corte".<br><br>
            14) Las referencias a "Trofeos" se basarán en los torneos de dicha temporada en concreto a los que el PGA
            atribuya dicha definición, independientemente de los cambios que se produzcan en el campo de juego, la fecha,
            etc.<br><br>
            15) Si se detiene el encuentro tras comenzar una ronda y la asociación que lo rige decide cancelar todas las
            acciones relacionadas con esa ronda y comenzar de nuevo o cancelar dicha ronda, todas las apuestas realizadas
            tras el inicio de esa ronda sobre los mercados del Desenlace del torneo, Líder tras la ronda y Se clasifica/No se
            clasifica serán nulas.<br><br>
            16) Las apuestas que se refieren a un participante específico consiguiendo una posición predeterminada (por
            ejemplo: Los 5/10/20/40 primeros) durante un torneo, la selección de torneos o cualquier clasificación en
            particular serán clasificadas según las reglas de desempate "Dead Heat" si el participante empata en esa posición
            en particular.<br><br>
            17) Las ofertas relacionadas con un participante ocupando una posición en particular en el marcador en un
            momento específico (por ejemplo: Líder al concluir la ronda X) serán establecidas con el resultado al final de la
            ronda/periodo de tiempo especificado. Las reglas del empate Dead Heat se aplican en los empates de posición.<br>
            18) En torneos donde se usa la "puntuación Stable modificada", las apuestas se establecen en base a los puntos
            conseguidos y no según los intentos realizados. Los jugadores enumerados deben completar como mínimo 1
            hoyo para que las apuestas sean válidas, de lo contrario serán anuladas.<br><br>
            19) La resolución de las ofertas de las llamadas "Apuestas de acción" y similares, incluyendo sin limitarse a los
            "Fairways/Greens en zonas de Regulación/Bunkers/Agua" se establece en el punto exacto donde la bola se haya
            detenido. Las apuestas se establecen según la página web oficial del Tour/Evento relacionado y si no se
            encuentra información de dicha apuesta allí se usarán las imágenes televisivas para determinar el resultado. La
            siguiente descripción y reglas de ajuste se proporcionan para las ofertas de "Apuestas de acción":<br><br>
            <ul>
            <li>
            Fairway en regla - La apuesta se refiere al disparo con el tee en un hoyo de Par 4 o Par 5 establecido como
            detenido en la zona de hierba conocida como “fairway”.
            </li>
            <br>
            <li>
            Green en regla - La apuesta se refiere al acercamiento del jugador establecido como detenido en la zona de
            hierba conocida como "green" en el número de golpes establecido, que se entiende de la siguiente manera:<br><br>
            <ul>
            Número de regulación de golpes para hoyos de Par 3: 1 Golpe<br>
            Número de regulación de golpes para hoyos de Par 4: 2 golpes<br>
            Número de regulación de golpes para hoyos de Par 5: 3 golpes
            </ul>
            </li>
            <br>
            <li>
            Agua en el hoyo - La apuesta se refiere al tiro del jugador establecido como detenido dentro de una zona de
            Agua o tras la línea de límite roja de una zona de Agua y por lo tanto dentro de la zona.
            </li>
            <br>
            <li>
            Bunker en el hoyo - La apuesta se refiere al tiro del jugador establecido como detenido dentro de una
            Búnker de Arena. Si el jugador precisa entrar en el Búnker de Arena para jugar un golpe que caiga fuera del
            Búnker de Arena, esto NO se considerará como detenido en un Búnker de Arena.
            </li>
            <br>
            <li>
            Bandera más cercana en regla - La apuesta se refiere al jugador que consigue acercar su bola más a la
            bandera con el tiro de regulación. La bola debe descansar sobre el green para ser válida. Si ambos jugadores
            no logran alcanzar el Green en Regla, las apuestas se anularán.<br><br>
            <ul>
            Número de regulación de golpes para hoyos de Par 3: 1 Golpe<br>
            Número de regulación de golpes para hoyos de Par 4: 2 golpes<br>
            Número de regulación de golpes para hoyos de Par 5: 3 golpes
            </ul>
            </li>
            <br>
            </ul>
            20) Las reglas de "Dead Heat" se aplican a las ofertas "Ganador sin X/Jugadores mencionados" si 2
            participantes o más comparten las posiciones aplicables. Las apuestas se anulan si el jugador o jugadores
            relacionados no participan en la competición.<br><br>
            21) Para las apuestas de "Margen ganador" se deben jugar como mínimo 36 hoyos para que resulten válidas.<br><br>
            22) En las ofertas de "Predicción directa", los participantes seleccionados deben concluir el torneo en 1ª y 2ª
            posición para ser enumerados. Las reglas de Dead Heat se aplican en caso de empates. Ambos jugadores
            enumerados deben usar el tee una vez más tras la aceptación de apuestas para que sean válidas.<br><br>
            23) Las apuestas a "Puntuación ganadora" requieren que se completen todos los hoyos programados en el
            torneo. Si se reduce el número de hoyos se anularán las apuestas.<br><br>
            24) Para el "Hoyo en uno durante el torneo" se deben jugar como mínimo 36 hoyos del torneo para que las
            apuestas sean válidas, aunque si se completa con anterioridad también se considerará como válida. Para el
            "Hoyo en uno durante la ronda X" se debe jugar la ronda por todos los jugadores para que las apuestas sean
            válidas, aunque si se completa con anterioridad también se considerará como válida.<br><br>
            25) Las apuestas relacionadas con un jugador específico como "Ganador Siempre en cabeza" requieren que la
            persona en cuestión lidere el marcador (incluyendo los empates si los hay) al terminar cada una de las
            rondas programadas del torneo. Si se reducen los hoyos/rondas programados se anularán las apuestas.<br><br>
            26) Las apuestas "Ganador al Birdie/Par/Bogey al hoyo 72" se refieren a la actuación del eventual ganador del
            torneo en el hoyo 18 de su Ronda 4. Las apuestas se anulan si se reducen los hoyos/rondas del torneo. En
            situaciones donde el juego comienza al estilo "Shotgun Start" en la ronda 4, las apuestas se anulan.<br><br>
            27) Las apuestas "Ganador juega en la agrupación de la ronda final" se refieren a si el eventual ganador del
            torneo surgirá de la bola 2 o bola 3 que están programadas para el último tee siguiendo los horarios de tee
            establecidos por la organización oficial`,
     
    },
    {
      id: 10,
      title: 'Voleibol',
        img: 'assets/logo_Deportes/logo_Voleibol_Cut.jpg',
        content: `1) Todos los puntos conseguidos durante el “Set de oro” no se tendrán en cuenta en el resultado de dicho partido,
        excepto de las apuestas refiriendo a los progresos en el torneo y los Totales del torneo.<br><br>
        2) Las apuestas relacionadas con jugadores en partidos/eventos/torneos se establecerán en base al resultado
        obtenido tras la prórroga, a menos que se indique lo contrario.<br><br>
        3) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
        de puntos conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
        curso de un partido (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará más puntos), requiere
        que todos los jugadores individuales sean participantes activos en el partido relacionado para que las apuestas
        sean válidas.<br><br>
        4) Las apuestas a “Más/Menos de” y "Handicap" en partidos sin finalizar cuyos resultados ya se hayan
        establecido antes de la suspensión y/o cualquier reanudación del juego que posiblemente no produzca un
        resultado diferente a dichas ofertas, se establecerán en función del resultado obtenido hasta la suspensión. Para
        calcular estas apuestas, se añadirá la cantidad mínima de acontecimientos que se habrían necesitado para que la
        oferta hubiese finalizado con naturalidad, en función del número de series que se hayan programado para el
        partido. Si este cálculo da paso a una situación en la que ninguna modificación podría afectar al resultado de la
        oferta, se establecerá como tal. Consulta los ejemplos de la sección de tenis para obtener referencias.<br><br>
        5) Todas las apuestas a “Resultado correcto”, “Par/Impar” y que hagan referencia al ganador de un
        periodo/espacio de tiempo en concreto del partido (ejemplo “¿Qué equipo ganará el 1.er set?” y “Set 2 - Primero
        en conseguir 15 puntos” exigen que se complete la parte correspondiente del partido.<br><br>
        6) Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para
        que las apuestas sean válidas, a excepción de aquellas ofertas cuyos resultados ya se hayan establecido antes de
        la suspensión del juego y cualquier reanudación del juego que posiblemente no produzca un resultado diferente.<br><br>
        7) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de puntos conseguidos
        por el jugador X durante la World Championship) o comparar actuaciones de 2 jugadores individuales durante
        un periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
        más puntos durante la temporada normal), requiere que todos los jugadores individuales sean participantes
        activos en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean
        válidas. Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones
        potencialmente sobre un jugador involucrado para que sea apto para la competición (como
        lesiones/intercambios/novedades de cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a
        favor de cualquier resultado individual sin que esas cuotas se hayan ajustado para reflejar el estado actual de la
        apuesta, serán declaradas nulas.`
      
    },
    {
      id: 11,
      title: 'Atletismo',
      img: 'assets/logo_Deportes/logo_Atletismo_Cut.jpg',
      content: `1) A menos que se indique lo contrario, todas las apuestas a atletismo se determinarán en base al resultado
            obtenido una vez transcurrida la fase final de dicha competición. Si ninguno de los participantes de la lista
            participa en la fase final, todas las apuestas se declararán nulas, a menos que la autoridad competente siga los
            procedimientos de empate especificados, en cuyo caso, se considerarán válidas.<br><br>
            2) Todas las ofertas de apuesta se establecerán según el primer resultado oficial que se presente. Sin embargo, [el
            Operador] tendrá en cuenta y establecerá/volverá a establecer las apuestas en consecuencia una vez producidos
            los posibles cambios en los resultados oficiales publicados como máximo 24 horas después del evento. Para
            tener en cuenta dicha posibilidad, la protesta debe atribuirse a incidentes que tengan lugar exclusivamente
            durante el evento, como por ejemplo una infracción de línea, empujones o errores al pasar el testigo en una
            carrera de relevos, etc. No se tendrán en cuenta los casos de dopaje. Los resultados disponibles transcurridas las
            24 horas mencionadas anteriormente se considerarán vinculantes independientemente de protestas posteriores,
            cambios en el resultado oficial, etc.<br><br>
            3) Si existen dos o más participantes en diferentes eliminatorias de una competición, se anularán todas las ofertas
            de apuesta a Uno contra uno entre los mismos, a menos que exista una fase posterior para la que se clasifique al
            menos uno de ellos.<br><br>
            4) Los participantes descalificados debido a infracciones en la salida (errores en la salida) habrán participado en
            el evento.`,
    },
    {
        id: 12,
        title: 'Curling',
        img: '',
        content: `1) El establecimiento de todas las apuestas referentes al curling se basará en el resultado obtenido después de las
            entradas adicionales finales, a menos que se indique específicamente.`,
    },

    
    {
      id: 13,
      title: 'Voleibol Playa',
      img: '',
      content: `1) Todas las apuestas siguen siendo válidas en la medida en que se juega el partido/la oferta en el torneo,
            independientemente de los cambios de horarios, condiciones, etc., a menos que otros arreglos se han acordado.<br><br>
            2) Las apuestas en el “partido " se basa en el principio general de la progresión en el torneo o de la victoria en el
            torneo, dependiendo de la fase de la competición que el partido se refiere. El equipo de llegando a la siguiente
            ronda o ganando el torneo debe ser considerado como el ganador de la apuesta, independientemente de la duración del partido, 
            abandonos, descalificaciones, etc. Estas apuestas necesitan al menos que un set se complete
            para que las apuestas sean válidas.<br><br>
            3) Las apuestas en el " Más/Menos de" en partidos/eventos inacabados cuyo resultado ya está determinado antes
            de la interrupción y/o cualquier juego extendido no pueden producir un resultado diferente a la oferta se
            establecerá sobre la base del resultado de la interrupción. Para el cálculo de este pagamiento, se añadirá la
            cantidad mínima de sucesos que habrían sido necesarios para llevar la oferta a la conclusión natural de ser
            necesario, dependiendo del número de serie planeada para el partido. Si este cálculo da como resultado una
            situación en la que no es posible enmienda podría afectar el resultado de la oferta, se pagará como tal. Vea los
            ejemplos de la sección de tenis como referencia.<br><br>
            4) Las apuestas en el " Handicap" requiere que todos los sets deben ser completadas para que las apuestas se
            mantienen, con la excepción de los eventos cuyo resultado ya está determinado antes de la interrupción y/o
            cualquier continuación de juego no puede producir un resultado diferente y se ajustarán en consecuencia. Vea los
            ejemplos de la sección de tenis como referencia.<br><br>
            5) Todas las apuestas en el " Resultado correcto ", " Par/Impar " y las ofertas que hacen referencia al ganador de
            un período determinado en el partido (por ejemplo, " el equipo ganó el primer set") requiere que la parte
            pertinente del partido se completa`,
    },
    {
      id: 14,
      title: 'Ciclocros',
      img: '',
      content:
        '1) Se aplican los Términos y condiciones del ciclismo según proceda.',
    },
    {
      id: 15,
      title: 'Eventos Olímpicos y de Campeonatos',
      img: '',
      content: `1) Todas las condiciones que aparecen en esta sección tienen prioridad con respecto a cualquier otra regla o
            condición.<br><br>
            2) Todas las apuestas serán válidas siempre que el evento se celebre y decida durante el campeonato y el año a
            los que haga referencia, independientemente de los cambios que se produzcan en el lugar de celebración del
            evento.<br><br>
            3) Esta cláusula se aplica a las ofertas que cumplan razonablemente con cualquiera de los siguientes criterios:<br>
            <ol type="a">
            <li>
             la apuesta hace referencia a eventos programados para la fase final de los eventos que forman parte de
             Olimpiadas, competiciones mundiales y competiciones continentales;
            </li>
            <li>
             la fase final del evento tiene una limitación de tiempo.
            </li>
             </ol>`,
    },
    {
      id: 16,
      title: 'Reglas del Fútbol Australiano',
      img: '',
      content: `1) A menos que se indique de forma explícita, si un partido o un periodo especificado (por ejemplo, 1.ª mitad,
                3.er cuarto, etc.) finalizan en empate, todas las apuestas se establecerán según la regla conocida como regla del
                “empate”. En dicho caso, el pago se calculará una vez divididas las cuotas y multiplicadas por la apuesta,
                independientemente de si el pago neto es inferior a la apuesta del titular de la cuenta.<br><br>
                2) A menos que se indique lo contrario, todas las apuestas relacionadas con partidos se establecerán según el
                resultado obtenido al final del 4.º cuarto (tiempo reglamentario).<br><br>
                3) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
                de puntos conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
                curso de un partido (por ejemplo: Cuál de entre el jugador X y el jugador Y anotará más puntos), requieren que
                todos los involucrados jueguen desde el inicio del partido para que las apuestas sean válidas.<br><br>
                4) Primer anotador del partido/1.er cuarto: se reembolsarán las apuestas realizadas a aquellos jugadores que no
                estén entre los 21 primeros. Las apuestas al Primer anotador del partido no exigen que el gol se anote en el 1.er
                cuarto. Si no se anotan goles durante el periodo especificado, todas las apuestas se declararán nulas.<br><br>
                5) Primer anotador del 2.º, 3.er o 4.º cuartos: todas las apuestas serán válidas independientemente de la
                participación (o la no participación) del jugador en el cuarto indicado y en el partido. Si no se anotan goles
                durante el cuarto especificado, todas las apuestas se declararán nulas.<br><br>
                6) La apuesta “Siempre en cabeza” hace referencia al equipo (si existe) que liderará el partido al final de cada
                cuarto.<br><br>
                7) En el caso de que sea necesario repetir un partido o disputar partidos adicionales para determinar un puesto de
                la clasificación, los ganadores de la liga, etc., los resultados que se obtengan en estas repeticiones o partidos
                adicionales se utilizarán para establecer la oferta de apuesta en cuestión.<br><br>
                8) En relación a las apuestas de partido para una Gran Final, la apuesta hará referencia específicamente al
                próximo partido que se celebrará, o bien, al partido actual, en el caso de las apuestas en vivo. Las apuestas no se
                pospondrán a repeticiones posteriores y se añadirá un nuevo mercado para los siguientes partidos.<br><br>
                9) Al establecer las ofertas relacionadas con las actuaciones de dos jugadores/equipos o más en un periodo de
                tiempo estipulado/competición, las fases de eliminación en las "finales" afectarán el resultado. Si dos equipos
                son eliminados en la misma fase, el equipo que termine por encima en la escala de la AFL al terminar la
                temporada normal será considerado como ganador de una posición mejor.<br><br>
                10) Todas las apuestas serán válidas independientemente de los cambios realizados con respecto al lugar de
                celebración.<br><br>
                11) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de puntos conseguidos
                por el jugador X durante los Playoffs) o comparar actuaciones de 2 jugadores individuales durante un
                periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
                más puntos durante la temporada normal), requiere que todos los jugadores individuales sean participantes
                activos en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean
                válidas. Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones
                potencialmente sobre un jugador involucrado para que sea apto para la competición (como
                lesiones/intercambios/novedades de cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a
                favor de cualquier resultado individual sin que esas cuotas se hayan ajustado para reflejar el estado actual de la
                apuesta, serán declaradas nulas.`,
    },
    {
      id: 17,
      title: 'Balonmano',
      img: '',
      content: `1) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
        de puntos conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
        curso de un partido (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará más puntos), requiere
        que todos los jugadores individuales sean participantes activos en el partido relacionado para que las apuestas
        sean válidas.<br><br>
        2) Todas las ofertas referentes a Totales del torneo se establecerán en base a las estadísticas oficiales de la
        autoridad competente. A menos que se indique lo contrario, las cantidades acumulativas de dichas apuestas
        incluirán prolongaciones (por ejemplo, Prórroga), pero no los Lanzamientos de penalti.<br><br>
        3) El pago de las apuestas en los jugadores en un partido específico se basará en el resultado después del final de
        la segunda parte (tiempo reglamentario) a menos que se indique lo contrario.<br><br>
        4) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de puntos conseguidos
        por el jugador X durante la World Cup) o comparar actuaciones de 2 jugadores individuales durante un
        periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
        más goles durante la temporada normal), requiere que todos los jugadores individuales sean participantes activos
        en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean válidas.
        Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones potencialmente sobre
        un jugador involucrado para que sea apto para la competición (como lesiones/intercambios/novedades de
        cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a favor de cualquier resultado individual
        sin que esas cuotas se hayan ajustado para reflejar el estado actual de la apuesta, serán declaradas nulas.`,
    },
    {
        id: 18,
        title: 'Trotones',
        img: '',
        content: `1) Las apuestas a Uno contra uno en las que al menos un caballo finalice la carrera se establecerán en base al
        resultado oficial declarado que publique la autoridad competente.<br><br>
        2) Las apuestas a Uno contra uno en las que ninguno de los caballos obtenga resultados oficiales se declararán
        nulas.<br><br>
        3) Las apuestas a Uno contra uno en las que ambos caballos registren el mismo tiempo oficial se determinarán
        según el caballo que llegue antes a la meta según el resultado; si es imposible determinar si un caballo ha llegado
        antes que los demás en base al resultado, la apuesta se declarará nula.<br><br>
        4) Un cuerpo a cuerpo o un cuerpo a cuerpo triple será declarado nulo si: <br><br>
        <ol type="a">
        <li>
        Ningún caballo acaba la carrera; y/o
        </li>
        <li>
        Ningún caballo obtiene un premio en metálico.
        </li>
        </ol>
        "Premio en metálico" se entiende como la cantidad monetaria concedida dependiendo de la actuación en dicha<br>
        carrera. Como criterio de resolución de la apuesta, las cantidades concedidas por cualquier otra razón al margen
        de la clasificación (por ejemplo, participación/acto de presencia) no se considerará como "premios en metálico".<br><br>
        5) En el caso de que se produzcan errores de imprenta en la información, por ejemplo, aunque no de manera
        exclusiva, en los números de los caballos y de las carreras, los nombres de las carreras, los métodos de salida o
        las distancias, la apuesta se declarará nula siempre que todos los caballos indicados participen en la misma
        carrera del mismo evento.<br><br>
        6) Todas las apuestas se refieren a la reunión/carrera. Si la carrera/reunión no se hace/complete en la fecha
        prevista, todas las apuestas colocadas tras 0:00 CET del día se declarará nulas. Las apuestas colocadas antes 0:00
        CET del día siguen siendo válidas si la carrera/reunión se queda en el año de referencia.`
    },
    {
        id: 19,
        title: 'Hockey Sobre Hielo',
        img: '',
        content: `1) A menos que se indique lo contrario, los mercados se resolverán con los resultados y estadísticas al final de la
        posible prórroga, tanda de penaltis o cualquier otra prolongación que la autoridad competente autorice.<br><br>
        2) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
        de puntos conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
        curso de un partido (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará más goles), requiere que
        todos los jugadores individuales sean participantes activos en el partido relacionado para que las apuestas sean
        válidas.<br><br>
        3) El establecimiento de las apuestas por jugadores y mercados de equipos (tales como Goles, Asistencias,
        Puntos, Minutos de exclusión, Disparos a puerta, etc.) se resolverán atendiendo a las estadísticas oficiales de la
        autoridad competente. A no ser que se indique lo contrario, la resolución de dichas apuestas incluirá la
        prolongación (ej. Prórroga) pero no las Tandas de penaltis.<br><br>
        4) Para el establecimiento de apuestas " Más/Menos de " (Total de goles) en referencia al total de goles marcados
        en el partido incluyendo cualquier gol marcado en la prórroga y los lanzamientos de penalti, los goles marcados
        por ambos equipos en cualquier prórroga y en la posible tanda de penaltis se contarán sólo como "1". Los
        siguientes ejemplos se pueden utilizar para su consideración:<br><br>
        • Ejemplo 1 - “Más/Menos de “(tiempo regular) el partido se termina con un resultado de 2-2 al final de la
        tercera parte. El resultado de la apuesta "goles totales" se establecerá en el marcador 2-2 (4 goles en total).<br><br>
        • Ejemplo 2 - “Más/Menos de” (incl. prórroga y penaltis): El partido se termina con un resultado de 2-2 al final
        del tercer parte, el Equipo A marca un gol en la prórroga. El resultado de la apuesta " Total de goles " se
        establecerá en el marcador 3-2 (5 goles en total).<br><br>
        • Ejemplo 3 - “Más/Menos de“(incl. prórroga y penaltis): El partido se termina con un resultado de 2-2 al final
        de la tercera parte. Las prórrogas se terminan en 0-0, mientras que en las lanzamientos de penalti, el Equipo A
        anota un gol y el Equipo B anota 2 goles. El resultado de la apuesta " Total de goles " se establecerá en el
        marcador 2-3 (5 goles en total).<br><br>
        5) Todas las ofertas de "partido" de NHL y NCAA solo se considerarán válidas si hay menos de 5 minutos
        restantes de partido programado en el 3.º cuarto. Se efectuará la excepción de aquellas cuyos resultados se hayan
        decidido antes de la suspensión y que posiblemente no puedan modificarse independientemente de los eventos
        futuros, que se establecerán según el resultado decidido.<br><br>
        6) A menos que se especifique o implique en la oferta, todas las apuestas de "partido" de Hockey sobre hielo se
        determinan en base al resultado al concluir el tiempo reglamentario (es decir, el fin del 3er periodo).<br><br>
        7) A menos que se establezca específicamente o sea implícito en las características de la oferta, las decisiones de
        las apuestas de temporada se basarán en las clasificaciones, definiciones y reglas de resoluciones a seguir según
        la NHL.com, o la página web oficial de la competición (como sea aplicable).<br><br>
        8) Las Apuestas de temporada, sin importar que incluyan resultados obtenidos durante los Playoffs o demás, así
        como las ofertas referidas a equipos en particular o actuaciones de jugador seguirán siendo válidas sin que
        interfieran los eventuales cambios en los intercambios de jugadores, movimientos del equipo o cambios de
        nombre en cualquier momento de la temporada.<br><br>
        9) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de puntos conseguidos
        por el jugador X durante los Playoffs) o comparar actuaciones de 2 jugadores individuales durante un
        periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
        más puntos durante la temporada normal), requiere que todos los jugadores individuales sean participantes
        activos en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean
        válidas. Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones
        potencialmente sobre un jugador involucrado para que sea apto para la competición (como
        lesiones/intercambios/novedades de cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a
        favor de cualquier resultado individual sin que esas cuotas se hayan ajustado para reflejar el estado actual de la
        apuesta, serán declaradas nulas.<br><br>
        10) Las apuestas basadas en jugadores y otras estadísticas se solventan según los informes oficiales de los
        partidos tal y como se publican tras el partido por la asociación organizadora.`
    },
    {
        id: 20,
        title: 'Deportes de Motor',
        img: '',
        content: `1) Esta sección está destinada a todos los deportes relacionados con las carreras de motor, tales como: Fórmula
        Uno, A1 GP, CART, Indy Car, Nascar, carreras en circuitos, automóviles de turismo, DTM, resistencia, rally,
        rally-cross, motociclismo, superbikes.<br><br>
        2) Las apuestas se realizarán según la publicación de los tiempos en directo y la clasificación que aparezca en
        televisión en el momento de las presentaciones en el podio, o al final de la sesión, la carrera o el evento (según
        corresponda). Si la información necesaria para establecer la oferta falta/no aparece y/o está incompleta, la
        primera información oficial que aparezca en el sitio oficial se declarará vinculante, independientemente de las
        promociones, los descensos de categoría, las apelaciones y/o los castigos impuestos tras la finalización de la
        sesión/carrera a la que la apuesta haga referencia.<br><br>
        3) Los eventos que se acortan debido a las condiciones meteorológicas u otras situaciones pero que son
        declarados eventos oficiales por la autoridad competente se establecerán en consecuencia, independientemente
        de los cambios que dicha autoridad pueda realizar debido a la suspensión de la carrera.<br><br>
        4) Si un evento o una carrera/sesión/vuelta/eliminatoria vuelven a empezar desde el principio, las apuestas serán
        válidas y se establecerán según los resultados obtenidos después del nuevo comienzo, a excepción de aquellas
        apuestas cuyos resultados ya se hayan determinado.<br><br>
        5) Los pilotos que hayan participado en una sesión de clasificación o en un entrenamiento aprobados
        oficialmente habrán participado en el evento, independientemente de si participan o no en la carrera.<br><br>
        6) En las apuestas a "Uno contra uno" todos los participantes indicados deberán participar en la sesión a la que
        haga referencia la apuesta para que las apuestas sean válidas, independientemente de si un piloto consigue un
        tiempo oficial.<br><br>
        7) En las apuestas a "Ganador" o "Posición", no se aplicarán reembolsos si los participantes no participan en la
        sesión, el evento o el campeonato a los que haga referencia la oferta por algún motivo.<br><br>
        8) El establecimiento de las ofertas referentes a "Finalización de la carrera" se basará en la normativa oficial de
        la autoridad competente.<br><br>
        9) Las apuestas a "Uno contra uno" en las que ningún piloto consiga completar la carrera se determinarán en
        base al número máximo de vueltas completadas. En el caso de que los participantes no finalicen la carrera y
        registren el mismo número de vueltas, la apuesta se declarará nula, a excepción de los casos de carreras de rally
        en las que al menos uno de los participantes debe completar el evento, de lo contrario, todas las apuestas se
        declararán nulas.<br><br>
        10) Se tendrán en cuenta las penalizaciones de tiempo que aplique la autoridad competente durante las sesiones
        de clasificación. Se ignorarán otras subidas o bajadas de puestos en la parilla de salida.<br><br>
        11) Una carrera se considera iniciada cuando comienza la vuelta de calentamiento (según corresponda), por lo
        tanto, todos los pilotos que participen en la vuelta de calentamiento habrán iniciado la carrera. En el caso de un
        participante cuyo inicio se retrase, o que empiece la carrera desde el pit lane, también se considerará que el
        participante ha participado en la carrera.<br><br>
        12) El establecimiento de los mercados de temporada tendrá en cuenta la clasificación publicada exactamente
        después de la finalización de la última carrera de la temporada, incluyendo las decisiones tomadas por la
        autoridad competente durante la temporada, dado que dicha decisión se publica antes de la última carrera de la
        temporada. Las decisiones (incluso sobre las apelaciones) tomadas después del final de la última carrera
        estipulada no se tendrán en cuenta.<br><br>
        13) Todas las apuestas que hagan referencia a los resultados de los equipos serán válidas independientemente de
        los cambios que se produzcan en los pilotos.<br><br>
        14) Las apuestas serán válidas independientemente de los cambios que se produzcan en el calendario/la
        ubicación/el circuito de la carrera o el evento que tengan lugar el mismo año o la misma temporada,
        independientemente de los retrasos que se produzcan en el tiempo, el orden del calendario, etc., a excepción de
        aquellas apuestas realizadas después de las 00:00 CET del lunes de la semana para la que esté programada la
        carrera o el evento, apuestas que se reembolsarán si la carrera, el evento o la sesión a los que hace referencia la
        oferta no se celebran como máximo 7 días después de la fecha programada en el momento en el que se realizó la
        apuesta.<br><br>
        15) Para que las apuestas referentes a los resultados de los equipos durante la carrera sean válidas, debe indicarse
        el número estipulado de vehículos de cada equipo que comenzarán la carrera, de lo contrario, se declararán nulas
        (por ejemplo, en la Fórmula 1, deben comenzar la carrera dos coches de cada equipo).<br><br>
        16) El establecimiento de las apuestas en referencia a la inclusión del "coche de seguridad" no tiene en cuenta los
        eventos en los que la carrera real comienza detrás del "coche de seguridad".<br><br>
        17) El establecimiento de las apuestas en el primer piloto/coche de retirarse de la carrera se basa en la vuelta real
        en el que el conductor se ha retirado de la carrera. Por lo tanto, si dos o más pilotos se retiran en la misma vuelta,
        la apuesta se resolverá de conformidad con la (Section B, Para 5, Clausula 14).<br><br>
        18) Las apuestas relativas al primer/siguiente piloto en retirarse durante una carrera incluirán únicamente los
        lances ocurridos tras el comienzo oficial de la carrera. Las retiradas/abandonos anteriores al inicio del GP
        (incluidos aquellos ocurridos durante la vuelta de calentamiento) no se tendrán en cuenta para la resolución de la
        apuesta.`
    },
    {
        id: 21,
        title: 'Netball',
        img:'',
        content: `1) A menos que se indique lo contrario, las apuestas se determinarán en base al resultado obtenido una vez
        transcurrida la prórroga.<br><br>
        2) Las ofertas “Apuestas de margen” y “Primer tiempo/Final del partido” se establecen según el resultado
        obtenido al final de los 80 minutos de juego.<br><br>
        3) Los partidos deben completarse para que las apuestas sean válidas, a excepción de aquellas ofertas cuyos
        resultados se hayan decidido antes de la suspensión y que posiblemente no puedan modificarse
        independientemente de los eventos futuros, que se establecerán según el resultado decidido.<br><br>
        4) Las ofertas relacionadas con la actuación del jugador individual durante un partico único (por ejemplo: Total
        de puntos conseguidos por el jugador X) o comparación de actuaciones de 2 jugadores individuales durante el
        curso de un partido (por ejemplo: Cuál de entre el jugador X y el jugador Y anotará más puntos), requieren que
        todos los involucrados jueguen una parte activa avanzada aplicable al partido para que las apuestas sean válidas.<br><br>
        5) Las ofertas relacionadas con la actuación del jugador individual durante un periodo de tiempo en particular
        (por ejemplo: El total de puntos conseguidos por el jugador X durante la temporada normal) o comparar
        actuaciones de 2 jugadores individuales durante el curso de la temporada, (por ejemplo: Qué jugador entre el
        jugador X y el jugador Y anotará más goles durante la temporada), requiere que todos los jugadores individuales
        sean participantes activos en como mínimo un partido más aplicable a la oferta tras aceptar la apuesta para que
        las apuestas sean válidas.`
    },
    {
        id: 22,
        title: 'Pesäpallo (Béisbol Finlandés)',
        img:'',
        content: `1) Todas las apuestas a Pesäpallo se determinarán en función del resultado obtenido después de las dos primeras
        rondas (entradas). A menos que se indique lo contrario, los tantos anotados en los periodos de prolongación (por
        ejemplo, Supervuoropari) no se tendrán en cuenta.`
    },
    {
        id: 23,
        title: 'Liga de Rugby',
        img:'',
        content: `1) A menos que se indique lo contrario, las apuestas de la Liga de rugby se determinarán en base al resultado
        obtenido una vez transcurrida la prórroga o la Regla del punto de oro, según corresponda.<br><br>
        2) Las ofertas “Apuestas de margen” y “Primer tiempo/Final del partido” se establecen según el resultado
        obtenido al final de los 80 minutos de juego.<br><br>
        3) Es posible que determinadas competiciones/eventos cuenten con ofertas relativas a un periodo/partido
        específico que puedan finalizar en empate, ya sea al final de los 80 minutos de juego normales o incluso una vez
        transcurrida la prórroga. En dicho caso, las apuestas se establecen según la regla denominada regla del “empate”,
        según la cual el pago se calculará una vez divididas las cuotas y multiplicadas por la apuesta,
        independientemente de si el pago neto es inferior a la apuesta del titular de la cuenta. Si esta condición está
        vigente se indicará junto con la oferta de apuesta.<br><br>
        4) Anotadores de ensayos (Primero/Último/Cualquier momento/Equipo): todas las apuestas incluyen una posible
        prórroga. Las apuestas a jugadores en el 17.º día de partido son válidas independientemente de la participación (o
        no participación) del jugador en el partido. Las apuestas a jugadores que no estén incluidos en el 17.º día de
        partido serán reembolsadas.<br><br>
        5) A menos que se especifique lo contrario, las ofertas relacionadas con la actuación del jugador individual
        durante un partico único (por ejemplo: Total de Tries conseguidos por el jugador X) o comparación de
        actuaciones de 2 jugadores individuales durante el curso de un partido (por ejemplo: Cuál de entre el jugador X y
        el jugador Y anotará más Tries), requieren que todos los involucrados jueguen desde el inicio del partido
        correspondiente para que las apuestas sean válidas.<br><br>
        6) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de Tries conseguidos
        por el jugador X durante la World Cup) o comparar actuaciones de 2 jugadores individuales durante un
        periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
        más tries durante la temporada normal), requiere que todos los jugadores individuales sean participantes activos
        en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean válidas.
        Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones potencialmente sobre
        un jugador involucrado para que sea apto para la competición (como lesiones/intercambios/novedades de
        cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a favor de cualquier resultado individual
        sin que esas cuotas se hayan ajustado para reflejar el estado actual de la apuesta, serán declaradas nulas. Las
        apuestas similares se establecerán en base al resultado obtenido tras la prórroga, a menos que se indique lo
        contrario.<br><br>
        7) Todas las apuestas son válidas, independientemente de los cambios realizados con respecto al lugar de
        celebración.`
    },
    {
        id: 24,
        title: 'Unión de Rugby',
        img:'',
        content: `1) A menos que se especifique lo contrario, todas las apuestas relacionadas con el partido, los resultados de los
        equipos, etc., se establecerán según el resultado obtenido al final de la 2.ª mitad (una vez transcurridos los 80
        minutos de juego).<br><br>
        2) Es posible que determinadas competiciones/eventos cuenten con ofertas relativas a un periodo/partido
        específico que puedan finalizar en empate, ya sea al final de los 80 minutos de juego normales o incluso una vez
        transcurrida la prórroga. En dicho caso, las apuestas se establecen según la regla denominada regla del “empate”,
        según la cual el pago se calculará una vez divididas las cuotas y multiplicadas por la apuesta,
        independientemente de si el pago neto es inferior a la apuesta del titular de la cuenta. Si esta condición está
        vigente se indicará junto con la oferta de apuesta.<br><br>
        3) Anotadores de ensayos (Primero/Último/Cualquier momento/Equipo): todas las apuestas incluyen una posible
        prórroga. Las apuestas a jugadores en el 22.º día de partido son válidas independientemente de la participación (o
        no participación) del jugador en el partido. Las apuestas a jugadores que no estén incluidos en el 23.º día de
        partido serán reembolsadas.<br><br>
        4) A menos que se especifique lo contrario, las ofertas relacionadas con la actuación del jugador individual
        durante un partico único (por ejemplo: Total de Tries conseguidos por el jugador X) o comparación de
        actuaciones de 2 jugadores individuales durante el curso de un partido (por ejemplo: Cuál de entre el jugador X y
        el jugador Y anotará más Tries), requieren que todos los involucrados jueguen desde el inicio del partido
        correspondiente para que las apuestas sean válidas.<br><br>
        5) Las ofertas relacionadas con la actuación del jugador individual (por ejemplo: El total de Tries conseguidos
        por el jugador X durante la World Cup) o comparar actuaciones de 2 jugadores individuales durante un
        periodo/torneo/temporada en particular, (por ejemplo: Qué jugador entre el jugador X y el jugador Y anotará
        más tries durante la temporada normal), requiere que todos los jugadores individuales sean participantes activos
        en como mínimo una función más aplicable a la oferta tras aceptar la apuesta para que las apuestas sean válidas.
        Las apuestas realizadas tras o cualquier novedad que pueda reducir el número de funciones potencialmente sobre
        un jugador involucrado para que sea apto para la competición (como lesiones/intercambios/novedades de
        cambios) y por lo tanto afecte las cuotas incluso si solo es teóricamente a favor de cualquier resultado individual
        sin que esas cuotas se hayan ajustado para reflejar el estado actual de la apuesta, serán declaradas nulas. Las
        apuestas similares se establecerán en base al resultado obtenido tras la prórroga, a menos que se indique lo
        contrario.<br><br>
        6) Todas las apuestas son válidas, independientemente de los cambios realizados con respecto al lugar de
        celebración.`
    },
    {
        id: 25,
        title: 'Squash',
        img:'',
        content: `1) Se aplican todos los Términos y condiciones del tenis según proceda`
    },
    {
        id: 26,
        title: 'Speedway',
        img:'',
        content: `1) Todas las ofertas se establecerán según el resultado oficial que publique la autoridad competente al final de la
        última eliminatoria programada. Las promociones, los descensos de categoría, las apelaciones y/o los castigos
        impuestos tras la finalización del evento al que haga referencia la apuesta no se tendrán en cuenta.<br><br>
        2) Las apuestas a "1X2" entre dos equipos/pilotos se establecerán según el resultado oficial, independientemente
        del número de eliminatorias completadas.<br><br>
        3) Las apuestas a “Más/Menos de” en partidos/eventos sin finalizar cuyos resultados ya se hayan establecido
        antes de la suspensión y/o cualquier reanudación del juego que posiblemente no produzca un resultado diferente
        a dichas ofertas, se establecerán en función del resultado obtenido hasta la suspensión. Para calcular estas
        apuestas, se añadirá la cantidad mínima de acontecimientos que se habrían necesitado para que la oferta hubiese
        finalizado con naturalidad, en función del número de series que se hayan programado para el partido. Si este
        cálculo da paso a una situación en la que ninguna modificación podría afectar al resultado de la oferta, se
        establecerá como tal. Consulta los ejemplos de la sección de tenis para obtener referencias.<br><br>
        4) Para que las apuestas a “Handicap” sean válidas, deben completarse todas las eliminatorias programadas, a
        excepción de aquellos eventos cuyos resultados ya se hayan establecido antes de la suspensión y/o cualquier
        reanudación del juego que posiblemente no produzca un resultado diferente a dichas ofertas, que se establecerán
        en consecuencia. Consulta los ejemplos de la sección de tenis para obtener referencias.<br><br>
        5) Todas las apuestas a "Uno contra uno" y “Más/Menos de” que hagan referencia a los resultados de uno o
        varios pilotos en un evento/una eliminatoria se declararán válidas siempre que todos los pilotos indicados
        participen al menos en una eliminatoria.<br><br>
        6) Para que sean válidas, las apuestas referentes a una eliminatoria específica requieren la finalización de dicha
        eliminatoria y que todos los participantes indicados participen en la misma.`
    },
    {
        id: 27,
        title: 'Surf',
        img:'',
        content: `1) Todas las apuestas son válidas, independientemente de los posibles aplazamientos, cambios en el lugar de
        celebración, etc., siempre que el evento se celebre dentro del periodo de espera oficial declarado por la autoridad
        oficial competente.<br><br>
        2) Los enfrentamientos relacionados con los resultados de uno o varios surferos se considerarán válidos siempre
        que todos los surferos implicados inicien la eliminatoria/evento en cuestión.<br><br>
        3) Es posible que algunas competiciones/eventos cuenten con ofertas relacionadas con los resultados de los
        participantes en un evento en el que dos o más surferos sean eliminados en la misma fase. En dicho caso, las
        apuestas se establecerán según la regla denominada regla del “empate”, según la cual el pago se calculará una
        vez divididas las cuotas y multiplicadas por la apuesta, independientemente de si el pago neto es inferior a la
        apuesta del titular de la cuenta. Si esta condición está vigente se indicará junto con la oferta de apuesta.`
    },
    {
        id: 28,
        title: 'Natación',
        img:'',
        content: `1) A menos que se indique lo contrario, todas las apuestas a natación se determinarán en base al resultado
        obtenido una vez transcurrida la fase final de dicha competición. Si ninguno de los participantes de la lista
        participa en la fase final, todas las apuestas se declararán nulas, a menos que la autoridad competente siga los
        procedimientos de empate especificados, en cuyo caso, se considerarán válidas.<br><br>
        2) Todas las ofertas de apuesta se establecerán según el primer resultado oficial que se presente. Sin embargo,
        BetPlay tendrá en cuenta y establecerá/volverá a establecer las apuestas en consecuencia una vez producidos los
        posibles cambios en los resultados oficiales publicados como máximo 24 horas después del evento. Para tener en
        cuenta dicha posibilidad, la protesta debe atribuirse a incidentes que tengan lugar exclusivamente durante el
        evento, como por ejemplo una infracción de calle, una salida anticipada en una carrera de relevos, etc. No se
        tendrán en cuenta los casos de dopaje. Los resultados disponibles transcurridas las 24 horas mencionadas
        anteriormente se considerarán vinculantes independientemente de protestas posteriores, cambios en el resultado
        oficial, etc.<br><br>
        3) Si existen dos o más participantes en diferentes eliminatorias de una competición, se anularán todas las ofertas
        de apuesta a Uno contra uno entre los mismos, a menos que exista una fase posterior para la que se clasifique al
        menos uno de ellos.<br><br>
        4) Los participantes descalificados debido a infracciones en la salida (errores en la salida) habrán participado en
        el evento.`
    },
    
    {
        id: 29,
        title: 'Bádminton',
        img: '',
        content: `1) Se aplican los Términos y condiciones del tenis según proceda.`,
    },
    {
        id: 30,
        title: 'Deportes de Invierno',
        img: '',
        content: `1) Esta sección está destinada a los siguientes deportes: Esquí alpino, biatlón, esquí campo a través, estilo libre,
        combinado nórdico, pista corta, salto de esquí, snowboarding y patinaje de velocidad.<br>
        2) Los resultados de una competición se declararán válidos si la autoridad competente de dicho deporte declara
        que la competición es válida en la categoría indicada. Esto mismo se aplica en el caso de los eventos acortados,
        como los que consisten únicamente en una carrera o un salto en lugar de dos, o de los eventos que cambian el
        lugar de celebración.<br>
        3) En los casos de eventos suspendidos/no completados, todas aquellas ofertas cuyos resultados ya se hayan
        establecido antes de la suspensión del juego y cualquier reanudación del juego que posiblemente no produzca un
        resultado diferente se considerarán válidas y se establecerán en consecuencia.<br>
        4) Todas las ofertas se establecerán como nulas si el formato original/indicado de un evento cambia por
        completo, como por ejemplo el tamaño de la montaña en los saltos de esquí, el estilo en el esquí campo a través,
        etc.<br>
        5) BetPlay se reserva el derecho a aplicar la Regla 4 de Tattersalls en caso de que alguien no comience el partido
        en una apuesta a “Apuestas de grupo” (“El mejor de X”).<br>
        6) Las ofertas relacionadas con los eventos de deportes de invierno específicas ( por ejemplo, con exclusión de
        las apuestas en referencia a la clasificación general en los Juegos Olímpicos, competiciones mundiales y
        continentales ) están disponibles con la suposición explícita de que el especial evento será el próximo evento en
        el deporte/disciplina específica. Si el evento especificado debe ser movido por cualquier motivo y un
        acontecimiento muy similar al deporte/disciplina se mantiene en el mismo lugar y que comienza dentro de 72
        horas, las apuestas serán válidas para el siguiente evento programado en este deporte/disciplina. Por lo tanto, si
        por ejemplo se han previsto dos razas distintas de un mismo deporte/disciplina para el viernes y el sábado y la
        competencia se trasladó el viernes a sábado o domingo, las apuestas en la competición el viernes se resolverá de
        acuerdo con la siguiente carrera programada, en este caso el sábado. En los casos en que un solo evento está
        programado en el deporte/disciplina y la hora de salida se mueve en menos de 72 horas, las apuestas siguen
        siendo válidas y se establecerán en consecuencia. Si en cualquier caso se lleva a cabo un evento con las mismas
        connotaciones en el período de 72 horas después de la hora programada originalmente, las apuestas se
        establecerán como nulas.<br>
        7) En el " Uno contra uno " entre dos o tres participantes, al menos uno de los participantes enumeradas debe
        terminar la carrera/paso/salto final en el que las apuestas se refieren, para que las apuestas sean válidas. Esta
        disposición no es aplicable para el los eventos de Sprint de Cross-country que incluyen varias fases de
        eliminación, así como los saltos de esquí. En estos casos, el establecimiento se basará en la clasificación oficial,
        independientemente de si un participante completa la raza/estadio/salto final.`
    },
    {
        id: 31,
        title: 'Otros (apuestas no deportivas-especiales)',
        img: '',
        content: `1) Las condiciones indicadas en esta sección hacen referencia a todas las ofertas que no estén clasificadas en las
        diferentes categorías de deportes (por ejemplo, programas de televisión, política, galardones y premios,
        concursos de belleza, entretenimiento y similares). Cuando corresponda, a menos que se indique lo contrario en
        esta sección o en la oferta, estas apuestas se establecerán en base a las reglas de BetPlay que aparecen en
        (Section B, Para 5).<br>
        2) A menos que se especifique lo contrario a continuación o junto con la oferta de apuesta, todas las apuestas que
        pertenezcan a esta sección serán válidas hasta que se publique un resultado oficial, independientemente de los
        retrasos que se produzcan en el anuncio, las rondas de votación adicionales y otros acontecimientos que sean
        necesarios para anunciar los resultados.<br>
        3) Todas las ofertas abiertas en las que estén implicados participantes que abandonen/hayan sido expulsados de
        programas de televisión (independientemente de si se van voluntariamente o lo hacen por decisión del
        organizador), se declararán como ofertas perdidas. Si el mismo participante vuelve a participar en la misma
        competición en una fecha posterior, se considerará como un nuevo participante, por lo que las apuestas
        anteriores se establecerán como apuestas perdedoras.<br>
        4) Las apuestas referentes a la eliminación de un participante solo serán válidas en el siguiente programa. Los
        cambios en los métodos de expulsión, la cantidad y/o el grupo de participantes eliminados durante el mismo
        programa, o cualquier otro factor que apareciera por sorpresa, provocarán la anulación de las apuestas referentes
        a "Próxima expulsión" o "Próxima eliminación".<br>
        5) En el caso de que el programa finalice antes de que haya un ganador oficial, las apuestas se establecerán como
        empate (los mismos puntos) entre los participantes que no hayan sido eliminados. Las apuestas a Ganar/Posición
        dirigidas a los participantes que ya hayan sido eliminados se declararán perdedoras.<br>
        6) a. Los mercados de temática política se resloveran atendiendo a los resultados confirmados tras 12 horas
        desde la primera publicación oficial por parte del gobierno responsable de la organización de las elecciones en el
        sitio web oficial/redes sociales oficiales de la jurisdicción correspondiente. Resumidamente: en cuanto una
        organización gubernamental competente declara un resultado oficial y lo confirme tras 12 horas, este se tendrá
        en consideración como base para la resolución al margen de posibles protestas, disputas, resultados sub-judice
        y/o subsiguientes cambios en los resultados oficiales.<br>
        b. Para maximizar la experiencia del usuario, BetPlay se reserva al derecho, discrecional, de usar información
        recabada de fuentes reputadas e históricamente fiables para resolver los mercados antes de la proclamación de
        resultados oficiales según lo indicado en (Section C, Para 31, Clause 6(a)). En el supuesto caso de que tras la
        publicación de los primeros resultados oficiales hubiese discrepancias que modifiquen el resultado del mercado,
        BetPlay rectificará el error y concederá la victoria a las apuestas ganadoras según los resultados oficiales a la vez
        que realizará las modificaciones necesarias según (Section A, Para 6, Clause 2). Los cambios que deriven de
        las posibles protestas, dipustas, resultados sub-judice y/o sucesivos cambios del resultado oficial tras su
        proclamación/confirmación no serán tenidos en consideración.`
    },
    {
        id: 32,
        title: 'Limitaciones Específicas de Deportes',
        img: '',
        content: `1) Tal y como se indica en la (Sección A, párrafo 4.1), BetPlay se reserva el derecho a limitar el pago
        neto (una vez deducida la apuesta) de cualquier apuesta o combinación de apuestas realizada por un
        titular de la cuenta o grupo de titulares de la cuenta que actúan de forma conjunta.<br>
        2) A menos que se indique explícitamente, no se tendrán en cuenta las ganancias que superen los límites
        mostrados a continuación.<br>
        3) Los límites varían en función del deporte, el tipo de competición y el tipo de oferta de apuesta. Si una
        apuesta contiene una combinación de ofertas de diferentes deportes/categorías/partidos y/o tipos de
        ofertas, el pago se limitará al nivel más bajo incluido en la combinación, tal y como se especifica a
        continuación.<br>
        1. Fútbol:<br>
        a. El límite de 250 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Torneos internacionales masculinos regulados por la FIFA o la UEFA, incluidas las fases de
        clasificación;<br>
        (ii) Torneos de clubes internacionales masculinos regulados por la FIFA o la UEFA, incluidas las
        fases de clasificación;<br>
        (iii) Ligas nacionales masculinas de primer nivel en cualquiera de los siguientes países: Dinamarca,
        Inglaterra, Francia, Alemania, Italia, Países Bajos, Noruega, Escocia, Suecia y España;<br>
        (iv) Principales copas nacionales masculinas en cualquiera de los siguientes países: Dinamarca,
        Inglaterra, Francia, Alemania, Italia, Países Bajos, Noruega, Escocia, Suecia y España.
        El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (v) Los demás torneos internacionales;<br>
        (vi) Los demás torneos de clubes internacionales;<br>
        (vii) Ligas nacionales de primer nivel en cualquier otro país;<br>
        (viii) Principales copas nacionales en cualquier otro país;<br>
        (ix) Ligas nacionales masculinas de 2.º nivel en los siguientes países: Dinamarca, Inglaterra,
        Francia, Alemania, Italia, Países Bajos, Noruega, Suecia y España;<br>
        (x) Amistosos internacionales regulados por la FIFA.<br>
        El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan otras categorías de fútbol, sin incluir el fútbol playa y el fútbol sala.<br>
        b. Todas las apuestas referentes a jugadores (incluidas las tarjetas amarillas/rojas), traspasos,
        entrenadores, medidas disciplinarias, saques de esquina, tiros a puerta y otras ofertas que no sean
        decisivas de cara al resultado de una competición o un partido, se considerarán apuestas de
        relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        2. Baloncesto<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) NBA, Euroliga, Juegos Olímpicos, Torneos internacionales y continentales masculinos
        regulados por la FIBA<br>
        b. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de baloncesto.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        3. Hockey sobre hielo<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) NHL, Juegos Olímpicos, Torneos internacionales y continentales masculinos regulados por la
        IIHF<br>
        (ii) Ligas nacionales masculinas de primer nivel en cualquiera de los siguientes países: Finlandia y
        Suecia.<br>
        b. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con partidos que pertenezcan a
        cualquier otra oferta de hockey sobre hielo.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        4. Balonmano<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con partidos que pertenezcan a
        cualquiera de las siguientes categorías:<br>
        (i) Juegos Olímpicos, Torneos internacionales y continentales masculinos regulados por la IHF<br>
        b. El límite de 25 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de balonmano.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        5. Voleibol<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Juegos Olímpicos, Torneos internacionales y continentales masculinos regulados por la FIVB.<br>
        b. El límite de 25 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de voleibol.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        6. Tenis<br>
        a. El límite de 150 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Torneos Grand Slam a partir de la 3.ª
        ronda.<br>
        b. El límite de 75 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (ii) Torneos ATP y WTA a partir de cuartos de final.<br>
        c. El límite de 40 000 € se aplicará a todas las demás ofertas relacionadas con
        competiciones/partidos.<br>
        7. Béisbol y fútbol americano<br>
        a. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) NFL y MLB.<br>
        b. El límite de 25 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de béisbol o fútbol americano.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        8. Fútbol australiano<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) AFL.<br>
        b. El límite de 25 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de fútbol australiano.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        9. Críquet<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Partidos internacionales yde primer nivel.<br>
        b. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de críquet.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        10. Dardos<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Cualquier evento televisado en el Reino Unido.<br>
        b. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de dardos.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        11. Golf<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Trofeos, campeonatos del tour de la LPGA, europeos, PGA y WGC; Ryder Cup y Solheim Cup.<br>
        b. El límite de 25 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de golf.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        12. Rugby a 13<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Partidos internacionales, primerasligas nacionales británicas, NRL y Torneos internacionales
        masculinos regulados por la RLIF.<br>
        b. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de la Liga de rugby.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        13. Rugby a 15<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Partidos internacionales, primerasligas nacionales de Australia, Nueva Zelanda y Reino Unido y
        Torneos internacionales masculinos regulados por la IRB.<br>
        b. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de la Unión de rugby.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        14. Billar<br>
        a. El límite de 100 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Cualquier evento televisado en el Reino Unido.<br>
        b. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de billar.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        15. Deportes de motor<br>
        a. El límite de 50 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquiera de las siguientes categorías:<br>
        (i) Fórmula 1, MotoGP, Moto 2 y Moto 3.<br>
        b. El límite de 25 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos que
        pertenezcan a cualquier otra oferta de deportes de motor.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        16. Otros deportes<br>
        a. El límite de 40 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos en
        los siguientes deportes: Atletismo, bandy, boxeo, ciclismo, eSports, trote y deportes de invierno.<br>
        b. El límite de 25 000 € se aplicará a todas las ofertas relacionadas con competiciones/partidos en
        los demás deportes.<br>
        c. Todas las apuestas referentes a jugadores, traspasos, entrenadores, medidas disciplinarias y otras
        ofertas que no sean decisivas de cara al resultado de un partido/una liga/un torneo, se considerarán
        apuestas de relaciones públicas y apuestas novedosas y estarán sujetas a los mismos límites.<br>
        17. Apuestas no deportivas, novedosas, de poker y de relaciones públicas<br>
        a. El límite de 10 000 € se aplicará a las demás ofertas relacionadas con esta categoría. También se
        incluirán las ofertas relacionadas con los deportes, tales como Traspasos de jugadores, Próximo
        entrenador, etc.`
    },
    {
        id: 33,
        title: 'Mixed Martial Arts (MMA)',
        img: '',
        content: `1) Todas las ofertas se realizarán según el resultado oficial que declare la correspondiente autoridad competente
        inmediatamente después de que el locutor lo anuncie al final de la pelea. No se tendrán en consideración arreglos
        realizados al resultado final tras su primer anuncio excepto aquellos que realice la organización oficial para
        rectificar casis claros de errores comunes por el anunciador del ring.<br>
        2) A menos que se especifique claramente que las peleas no están confirmadas, las apuestas solo son válidas si
        tienen lugar en la tarjeta/fecha que se anunciaron sin tener en cuenta los cambios de ubicación. Las apuestas se
        considerarán nulas si hay anuncios oficiales por el cuerpo organizador relacionados con cambios de fecha,
        cambio de programación de tarjeta o cambios en los jugadores incluso si dicho partido finalmente se realiza
        como se anunció originalmente.<br>
        3) Con la excepción de las situaciones detalladas en la (Sección C, Párrafo 33, Cláusula 4), añadir o eliminar
        estipulaciones de título (por ejemplo: un partido anunciado inicialmente como partido no relativo al título
        cambia a partido de titulo) o los cambios en clases de peso además de alguno de los luchadores con
        imposibilidad de ajustarse al peso previamente establecido, no resultará en la anulación de las ofertas siempre
        que la lucha tenga lugar en la tarjeta para la que se anunció.<br>
        4) Si por algún motivo cambiase el número de asaltos programados de un combate entre el momento de
        aceptación de la apuesta y la pelea, las ofertas que hagan referencia específicamente a los asaltos, tales como
        "Apuestas a asaltos", "Grupo de asaltos", "Más/Menos de" y "El resultado se decidirá en el último momento", u
        otras ofertas que se vean afectadas por dicho cambio, se declararán nulas.<br>
        5) En el caso de que el combate se interrumpa por algún motivo entre asalto y asalto, por ejemplo, si se produce
        un abandono antes del inicio del asalto, se descalifica a algún boxeador o no se responde a la campana, el
        combate se declarará finalizado una vez terminada la ronda anterior.<br>
        6) Las apuestas a combates declarados como "Combate sin decisión" o en las que ningún luchador se declare
        como único ganador de la pelea, se anularán, a excepción de casos en los que dicho resultado se ofrece por
        motivos de apuestas o de aquellas ofertas cuyos resultados se hayan decidido antes de la decisión y que
        posiblemente no puedan modificarse independientemente de los eventos futuros, que se establecerán según el
        resultado decidido.<br>
        7) Las siguientes descripciones se consideran resultados aplicables para los diferentes escenarios:<br>
        • "Cierre": Una victoria por KO (Knock-out), TKO (Knock-out técnico), DA (Descalificación),
        Sumisión, "Tirar la toalla desde alguna de las esquinas de un luchador, el árbitro detiene la pelea
        declarando a un luchador como único ganador de la misma.<br>
        • "Puntos/Decisiones": Una victoria basada en las puntuaciones de los jueces.<br>
        • "Decisión unánime": Una decisión por parte de todos los jueces declarando al mismo jugador como
        ganador.<br>
        • "Decisión mayoritaria": Una decisión en la que la mayoría de jueces declara al mismo luchador como
        ganador mientras una minoría de los jueces declara la pelea como empate.<br>
        • "Decisión dividida": Una decisión en la que la mayoría de jueces declara a un luchador como ganador
        mientras una minoría de los jueces declara al otro luchador como ganador.<br>
        • "Empate mayoritario": Una decisión en la que la mayoría de jueces declaran la pelea como empate
        mientras una minoría de los jueces declara a un luchador como ganador.<br>
        • "Empate dividido": Una decisión donde cada tarjeta de puntos de los jueces declara un resultado
        diferente y ninguno prevalece sobre el otro.<br>
        8) Solo se considerará que un combate se disputó en su totalidad (“the distance”) si los se concede por
        puntos/decisión de los jueces tras la disputa de todos los asaltos previstos. En cualquier escenario en el que
        la decisión por puntos/de los jueces se toma antes de la disputa de todos los asaltos previstos (por ejemplo,
        se interrumpe el compate debido a un encontronazo de las cabezas de los luchadores), no se considerará que
        el combate se haya disputado en su totalidad y se considerará que terminó en el asalto/momento en el que se
        detuvo el combate y se resolvió en consecuencia. Las peleas que finalice por puntos/decisión de los jueces
        antes de su completo desarrollo previsto y/o los combates considerados como “sin decisión” (“no contest”) y
        el “método de decisión” se considerará como nulo a no ser que la resolución correspondiente fuera parte de
        la apuesta.<br>
        9) En las ofertas donde sea posible un empate y las cuotas no han sido ofrecidas para dicho resultado, las
        apuestas se considerarán nulas si el resultado es tal. En términos de resolución, las peleas con resultado
        "Empate por mayoría" o "Empate dividido" se consideran empate y las ofertas se ajustarán respectivamente.<br>
        10) Las apuestas relacionadas con la duración de la ronda/pelea representan el tiempo real pasado en la
        ronda/pelea como sea aplicable, según la duración de la ronda/pelea programada. Por ejemplo, una apuesta
        sobre Más de 4,5 rondas se establecerá como Más cada dos minutos y 30 segundos en la 5ª ronda.<br>
        11) La resolución de las ofertas basadas en estadísticas como las de "Luchador que haya tenido más
        derribos" o "Luchador que haya realizado más ataques significantes" se resolverán según los resultados de la
        asociación gobernante o su asociado oficial para dichas estadísticas. La resolución se basará según la
        definición con la cual el cuerpo gobernante oficial emita dichas estadísticas. A menos que se demuestre a
        través de pruebas no contradictorias, [el Operador] no se responsabilizará de las reclamaciones que surjan
        debido a la interpretación personal de dichos términos. En casos en los que ambos jugadores se declaren
        como cumplidores con el mismo resultado y dicho resultado no esté disponible como resultado posible para
        las apuestas, las apuestas serán reembolsadas.<br>
        12) Los mercados que confrontan o siguen peleas diferentes para la misma tarjeta como "Dos en total/TKOs
        en la tarjeta" o "Partidos en total decididos por resolución en tarjeta" indicarán el número de peleas
        necesario para establecerse en una tarjeta, o enumera específicamente la sección de la tarjeta a la que hace
        referencia. Las apuestas seguirán siendo válidas si una pelea aplicable se cancela, pero el número de peleas
        en la tarjeta o la sección específica aplicable de la misma sigue siendo igual (por ejemplo: repeticiones de
        reservas, luchador reemplazado o partidos por debajo de la tarjeta/preliminares forzados en la tarjeta
        principal). Si por algún motivo el número de peleas programado no tiene lugar durante la tarjeta o sección
        específica de la misma a la que se refiere la apuesta, las apuestas se consideran nulas`
    },
    {
        id: 34,
        title: 'Snooker',
        img: '',
        content: `1) Todas las apuestas siguen siendo válidas en la medida en que se juega el partido/la oferta en el torneo,
        independientemente de los cambios de horarios, etc, a menos que otros arreglos se han acordado.<br>
        2) La oferta de apuestas "Match" se basa en el principio general de la progresión en el torneo o de ganar el
        torneo, dependiendo de la fase de la competencia que el partido se refiere. El jugador que pasa a la siguiente
        ronda o que gana el torneo debe ser considerado como el ganador de la apuesta, independientemente de la
        duración del partido, de los retiros, de las descalificaciones, etc. Estas apuestas necesitan que al menos una ronda
        se complete para que las apuestas sean válidas.<br>
        3) La oferta "Más/Menos de" en partidos/eventos inacabados cuyo resultado ya está determinado antes de la
        interrupción y/o cualquier partido extendido no pueden producir un resultado diferente de la oferta será ajustada
        en base del resultado obtenido hasta que se produzca la interrupción. Para el cálculo de estos pagos de estas
        apuestas, se añadirá la cantidad mínima de evento que habría sido necesaria para llevar la oferta hasta su fin
        natural, si es necesario, dependiendo del número de partidas programadas para el partido. Si este cálculo da
        como resultado una situación en la que no hay posibles cambios que podrían afectar el resultado, la oferta de
        apuestas se resolverá como tal. Vea los ejemplos de la sección de tenis como referencia.<br>
        4) La oferta de apuestas en el "Handicap " requiere que todos las partidas deben ser completadas para que las
        apuestas se mantienen, salvo en el caso en que el resultado ya está determinado antes de la interrupción y/o
        cualquier juego extendido no pueden producir resultados diferentes tales ofertas se ajustarán en consecuencia.
        Vea los ejemplos de la sección de referencia de tenis.<br>
        5) Todas las apuestas "Resultado correcto", "Par/Impar" y éstas ofertas de apuestas referentes al ganador de un
        período determinado en el juego (por ejemplo, " ganador del primer set" o " primer jugador a alcanzar X
        partidas") requieren que el período correspondiente del partido se ha terminado.<br>
        6) Todos los tipos de ofertas de apuestas nomencionadas anteriormente requieren por lo menos una partida se
        completa para que la apuesta sea válida, a excepción de las ofertas cuyo resultado ya está determinado antes de
        la interrupción del juego y la continuación del juego no pudo producir un resultado diferente.<br>
        7) En casos de reasignación, todas las apuestas pendientes en ese periodo de tiempo específico serán establecidas
        como nulas y se abrirá un nuevo mercado. Se hará una excepción de aquellas ofertas cuyo resultado ya ha sido
        determinado antes de la reasignación y si al continuar el encuentro no se puede llegar a un resultado diverso.`
    },
    {
        id: 35,
        title: 'Dardos',
        img: '',
        content: `1) Todas las apuestas siguen siendo válidas en la medida en que se juega el partido/la oferta en el torneo,
        independientemente de los cambios de horarios, etc, a menos que otros arreglos se han acordado.<br>
        2) La oferta de apuestas "Match" se basa en el principio general de la progresión en el torneo o de ganar el
        torneo, dependiendo de la fase de la competencia que el partido se refiere. El jugador que pasa a la siguiente
        ronda o que gana el torneo debe ser considerado como el ganador de la apuesta, independientemente de la
        duración del partido, de los retiros, de las descalificaciones, etc. Estas apuestas necesitan que al menos una ronda
        se complete para que las apuestas sean válidas.<br>
        3) La oferta "Más/Menos de" en partidos/eventos inacabados cuyo resultado ya está determinado antes de la
        interrupción y/o cualquier partido extendido no pueden producir un resultado diferente de la oferta será ajustada
        en base del resultado obtenido hasta que se produzca la interrupción. Para el cálculo de estos pagos de estas
        apuestas, se añadirá la cantidad mínima de evento que habría sido necesaria para llevar la oferta hasta su fin
        natural, si es necesario, dependiendo del número de partidas programadas para el partido. Si este cálculo da
        como resultado una situación en la que no hay posibles cambios que podrían afectar el resultado, la oferta de
        apuestas se resolverá como tal. Vea los ejemplos de la sección de tenis como referencia.<br>
        4) La oferta de apuestas en el "Handicap " requiere que todas las partidas deben ser completadas para que las
        apuestas se mantienen, salvo en el caso en que el resultado ya está determinado antes de la interrupción y/o
        cualquier juego extendido no pueden producir resultados diferentes tales ofertas se ajustarán en consecuencia.
        Vea los ejemplos de la sección de referencia de tenis.<br>
        5) Todas las apuestas "Resultado correcto", "Par/Impar" y estas ofertas de apuestas referentes al ganador de un
        período determinado en el juego (por ejemplo, " ganador del primer set" o " primer jugador a alcanzar X
        partidas") requieren que el período correspondiente del partido se ha terminado.<br>
        6) Todos los tipos de ofertas de apuestas nomencionadas anteriormente requieren por lo menos una partida se
        completa para que la apuesta sea válida, a excepción de las ofertas cuyo resultado ya está determinado antes de
        la interrupción del juego y la continuación del juego no pudo producir un resultado diferente. Las ofertas que
        combinen un número de situaciones incurridas por un jugador en contreto en un encuentro/evento en particular
        (por ejemplo: King of the Oche, etc.) requerirán que todas las connotaciones relacionas con esa apuesta se
        deberán cumplir de manera plena e incuestionable. Si 1 o más parte de la oferta finalizasen en empate, se
        considerarán las apuestas como PERDIDA.`
    }
  ];
