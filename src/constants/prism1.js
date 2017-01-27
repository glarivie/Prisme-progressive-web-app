import React from 'react';
import result1 from '../assets/prism/p1-1-1.png';
import result2 from '../assets/prism/p1-1-2.png';

const prisme1 = [{
    title: 'Nombre de votants à la primaire de gauche : il y a (toujours) un problème',
    prisme: 0,
    article: 0,
    img: 'http://referentiel.nouvelobs.com/file/15857046-nombre-de-votants-a-la-primaire-de-gauche-il-y-a-toujours-un-probleme.jpg',
    author: 'Paul Laubacher',
    category: 'Politique',
    source: 'NouvelObs',
    content:
      <article>
        <p>Il ne fallait pas rater le coche. Las, les organisateurs de la primaire donnent l'impression d'avoir oublié que pour qu'un scrutin soit légitime, il doit être sincère. Aujourd'hui, de nombreuses ombres pèsent sur le scrutin du premier tour, qui a eu lieu dimanche 22 janvier. En cause : le site des "Primaires citoyennes", qui publie les résultats du vote. Et le nombre de votes. Le compte ne tombe pas juste.</p>
        <p>Comment en est-on arrivé là ? A 10 heures, le site est actualisé avec le dépouillement de nouveaux bureaux de vote. On y apprend que la participation est de 1.601.138. Mais les pourcentages, eux, n'ont pas bougé d'un poil : ce sont ceux publié à 00h45.</p>
        <h3>Des voix manquantes</h3>
        <p>Immédiatement, des journalistes notent qu'il y a, en plus, un écart de voix de 160 entre la participation annoncée et le total des voix des candidats. Ce qui correspond à 0,01% du total des voix affichées. Plus inquiétant : le total des pourcentages des voix des candidats et des votes blancs et nuls est de 99,99%.</p>
        <p>Interpellé, notamment, par la rubrique Désintox de "Libération", le site de la primaire est de nouveau actualisé.</p>
        <p>Le nombre de votants reste le même. Il y a un seul changement : Sylvia Pinel passe de 31.542 voix à 31.703 voix. Soit : 161 voix de plus. Nouveau problème. Le total des voix des candidats et des votes blancs et nuls dépasse d'une voix le total des votants affiché. Décidément, quand ça veut pas...</p>
        <p>Rebelote, le site est de nouveau actualisé. Cette fois-ci, c'est le nombre de votants qui récupère une voix : on passe donc à une participation de 1.601.139 votants... Et l'on sent comme une odeur de manipulation des chiffres. Mais les problèmes pour le Parti socialiste ne s'arrêtent pas là.</p>
        <h3>La répartition des voix</h3>
        <p>Entre le nombre de voix obtenues par chaque candidat à 00h45 et le nombre de voix obtenues à 10 heures, il y a exactement 352.013 votants en plus. La grande question porte sur la répartition des voix entre chaque candidat.</p>
        <img  alt='results' src={result1} />
        <p>Or on peut observer que la répartition des 352.013 voix, censées être comptabilisées, suit en réalité les mêmes pourcentages que les résultats de 00h45, qui étaient les suivants :</p>
        <ul>
          <li>Benoît Hamon : 36,35%</li>
          <li>Manuel Valls : 31,11%</li>
          <li>Arnaud Montebourg : 17,52%</li>
          <li>Vincent Peillon : 6,85%</li>
          <li>François De Rugy : 3,88%</li>
          <li>Sylvia Pinel : 1,97%</li>
          <li>Jean-Luc Bennahmias : 1,01 %</li>
        </ul>
        <p>Par ailleurs, si on lit les chiffres en valeurs relatives, on remarque que l'apport de voix pour chaque candidat entre 00h45 et 10 heures correspond à 28% de son total de voix à 10 heures, et à 21% de son total des voix à 00h45.</p>
        <img  alt='results' src={result2} />
        <p>Vous avez dit bizarre ? Pour mieux comprendre, cela signifie que les voix se sont réparties de façon égale entre les candidats, en fonction de leur score. Statistiquement très improbable.</p>
        <h3>Le "bug"</h3>
        <p>Interrogé par la rubrique Désintox de "Libération", Christophe Borgel, président du comité d’organisation de la primaire, évoque un bug pour expliquer ces résultats :</p>
        <p><i>"Il y a eu un bug, rien de plus. Et c’est un peu de ma faute. Il y avait beaucoup de pression autour du niveau de participation. J’ai demandé à ce que les résultats soient actualisés au plus vite. Et effectivement, on a appliqué, au nouveau total de votants, les pourcentages de la veille."</i></p>
        <p>Comprendre : ce ne sont pas les bulletins de vote qui ont modifié le score des candidats. Les organisateurs ont simplement appliqué au nouveau total de voix les scores en pourcentages comptabilisés à 00h45.</p>
        <h3>Comment s'en sortir ?</h3>
        <p>Trois scénarios possibles donc :</p>
        <ul>
          <li>Soit il y a bien eu 352.013 voix en plus, mais ces votes sont mal répartis entre les candidats ;</li>
          <li>Soit il y a bien eu 352.013 voix en plus, et ces votes se sont répartis avec les mêmes proportions entre les candidats. Possible, mais extrêmement rare en termes statistiques.</li>
          <li>Soit il n'y a pas 352.013 voix en plus. Et le PS a gonflé ses chiffres de participation.</li>
        </ul>
        <p>Comment pourrait-on vérifier les chiffres donnés par les organisateurs de la primaire ?</p>
        <ul>
          <li>En donnant, en toute transparence, le résultat dans chaque bureau de vote ;</li>
          <li>En donnant le montant récolté par les organisateurs de la primaire, égal au nombre de votants puisque chaque électeur était censé donner un euro pour voter.</li>
        </ul>
        <p>L'enjeu est grand pour le Parti socialiste. Le moindre soupçon sur la sincérité du scrutin, sur la participation et le score des candidats, entamera profondément la crédibilité du parti, et du candidat qui sera désigné à l'issue de la primaire.</p>
        <h3>MàJ à 19h37 :</h3>
        <p>Elle pris le temps, mais elle a réagit. La Haute autorité du PS a publié un communiqué qui est censé expliquer les raisons du cafouillage. En réalité peu d'explication, mais de nouveaux chiffres, là encore, différent de ceux publiés sur le site de la primaire à 10h.</p>
        <p>La Haute autorité annonce avoir validé les bulletins de 94,45% des bureaux de vote, soit 6.806 bureaux, pour un nombre de votants égal à 1.597.720. Les nouveaux scores données sont les suivants :</p>
        <ul>
          <li>Benoît Hamon : 35,86%</li>
          <li>Manuel Valls : 31,22%</li>
          <li>Arnaud Montebourg : 17,70%</li>
          <li>Vincent Peillon : 6,79%</li>
          <li>François de Rugy : 3,82%</li>
          <li>Sylvia Pinel : 1,98%</li>
          <li>Jean-Luc Bennahmias : 1%</li>
        </ul>
        <p>Commentaire de la Haute autorité : "Force est constater que les écarts sont marginaux". Elle annonce, toutefois que la totalité des résultats par bureau de vote, circonscription et département sera mise en ligne dans 24 heures. </p>
        <p>Force est de constater donc, que le Haute autorité n'explique pas :</p>
        <ul>
          <li>Pourquoi le nombre de votant est de 1.601.139 sur le site de la primaire ?</li>
          <li>Pourquoi il y a un écart de 3.419 voix entre ses résultats et ceux du site de la primaire ?</li>
          <li>Pourquoi les pourcentages établis à 00h45 étaient en vigueur au moment de la mise à jour du site à 10h ?</li>
          <li>Pourquoi Sylvia Pinel a récupéré 161 voix entre deux mise à jour, après 10h ?</li>
        </ul>
        <p>Du côté des organisateurs, difficile d'obtenir une explication précise. Le président de la Haute autorité de la primaire socialiste élargie, Thomas Clay, jure qu'il "n'y a pas de participation gonflée. Jamais la Haute autorité ne l'aurait accepté, jamais le Comité national d'organisation des primaires ne l'aurait proposé, et jamais le prestataire de service ne l'aurait mis en place".</p>
        <p>Interrogé sur RTL, Christophe Borgel, président du comité d'organisation, évoque l'erreur d'un permanent du PS. "Il a mis sur la page du site le nouveau nombre de votants sans chercher à regarder où on en était des résultats. C'est plus une erreur humaine qu'un bug informatique."</p>
      </article>,
  }, {
    title: "Primaire à gauche : le PS soupçonné d'avoir manipulé les chiffres du scrutin",
    prisme: 0,
    article: 1,
    img: 'http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/politique/calendrier-candidats-scrutin-cinq-choses-a-savoir-sur-la-primaire-de-gauche-2922989/30201746-1-fre-FR/Calendrier-candidats-scrutin-Cinq-choses-a-savoir-sur-la-primaire-de-gauche.jpg',
    author: 'Arthur Berdah , François-Xavier Bourmaud',
    category: 'Politique',
    source: 'Figaro',
    content:
      <article>
        <p>Alors que 350.000 voix ont été comptabilisées entre dimanche soir et lundi matin, les scores des sept candidats sont restés identiques. Une hypothèse statistiquement quasi-impossible. Après avoir d'abord invoqué un «bug» informatique, le PS parle désormais d'une «erreur humaine» commise par «un permanent».</p>
        <p>«Quand c'est flou, c'est qu'il y a un loup.» Restée célèbre depuis qu'elle a été prononcée par Martine Aubry pour attaquer François Hollande en 2011, cette petite phrase est plus que jamais d'actualité. Car lundi soir, 24 heures après la clôture des bureaux de vote de la primaire, aucune donnée définitive sur le niveau de participation au scrutin n'avait été officiellement communiquée. Ni par le Parti socialiste. Ni par la Haute autorité. Les derniers chiffres transmis ne portaient que sur 94,45 % des bureaux et faisaient état de 1 597720 électeurs.</p>
        <p>Ce dernier chiffre est à prendre avec des pincettes. Car les soupçons de bidonnage qui l'entourent sont nombreux. Ainsi, le nombre de votants a d'abord été actualisé en temps réel sur le site des «primaires citoyennes», avant d'en disparaître mystérieusement dans la nuit de dimanche à lundi... Puis, de réapparaître lundi, en fin de matinée. Entre-temps, quelque 350 000 nouvelles voix avaient été comptabilisées et réparties sur l'ensemble des sept candidats. Mais sans que cela ne modifie en rien leur score. Pas même d'un seul dixième de point... À titre d'exemple, le score de Benoît Hamon est resté figé à 36,35 % alors que son nombre de voix est passé de 454041 à 582014. Idem pour les six autres candidats. Ce qui est statistiquement quasi impossible. De là à penser que le PS a joué aux apprentis sorciers... Plusieurs hypothèses. Ces 350 000 voix n'existent tout simplement pas et ont été opportunément «inventées» pour gonfler le chiffre total de la participation sans modifier les scores des candidats. Ces 350 000 voix existent bel et bien et, dans ce cas, se pose la question de leur répartition entre les candidats.</p>
        <h3>Certains journalistes ont pu voter deux fois...</h3>
        <p>Contacté par Libération, le président du Comité national d'organisation de la primaire, Christophe Borgel, a d'abord invoqué une défaillance informatique. «Il y a eu un bug, rien de plus. Et c'est un peu de ma faute. Il y avait beaucoup de pression autour du niveau de participation, j'ai demandé à ce que les résultats soient actualisés au plus vite. Et effectivement, on a appliqué au nouveau total de votants les pourcentages de la veille», a-t-il tenté de déminer. Joint dans l'après-midi par Le Figaro, il s'est confondu en excuses et a dit «assumer les responsabilités». Mais, il a cette fois pointé l'«erreur humaine» d'«un permanent qui a fait un gros loupé». «Sachant que les résultats étaient stabilisés, je n'ai pas fait attention à leur répercussion. Qu'ils bougent de 0,2 point ou 0,3 point était le cadet de mes soucis, vu tout ce qu'il me reste à organiser en cette semaine d'entre-deux tours. Mais quand j'ai appris ce qu'il s'était passé, j'ai convoqué tout le monde dans mon bureau. La plupart de ceux qui étaient là ne m'avaient jamais vu gueuler. Ils ont découvert ce que ça donnait...», raconte-t-il. Contrairement à Thomas Clay, qui dit «ne pas bien comprendre cette polémique», Christophe Borgel assure qu'il «entend les interrogations légitimes» des journalistes. Il jure toutefois qu'il n'y a eu ni fraude ni manipulation. «Si c'était le cas, pourquoi nous serions-nous contentés d'1,6 million au lieu de monter à deux millions? Et comment croyez-vous que j'aurais pu convaincre des magistrats qui composent la Haute autorité de falsifier les chiffres?», interroge-t-il, conscient de l'image dévastatrice que renvoie cette situation.</p>
        <p>On a connu des défenses plus convaincantes. D'autant que d'autres problèmes ont été constatés dimanche. Ainsi, certains journalistes sont parvenus à voter deux fois... Ces cafouillages créent du malaise au PS. En découvrant l'histoire, certains socialistes ont levé les yeux au ciel et soupiré. «Mais c'est pas vrai... Je vois très bien ce qui s'est passé. Ils étaient trop bas en participation et ils ont ajusté», avance-t-on dans le camp d'un candidat. Chez un autre, on minimise: «On reste dans le folklore socialiste. Tout cela s'inscrit dans la longue lignée des accidents qu'a déjà connus le Parti. Souvenez-vous, le congrès de Reims...» C'était en 2008 et des fraudes massives organisées par le camp de Martine Aubry avaient empêché Ségolène Royal d'être élue première secrétaire du PS. Une autre élue socialiste ironise sur cette «alchimie électorale qui, à force, va finir par leur péter entre les mains». Pour l'heure, aucun des principaux candidats ne s'est plaint des résultats. Après tout, le vainqueur quel qu'il soit aura besoin d'afficher une participation convenable pour légitimer sa candidature face à Jean-Luc Mélenchon et Emmanuel Macron. Peu importent les bugs donc.</p>
      </article>
    }, {
      title: "Primaire à gauche : le PS manipule les résultats puis plaide une 'connerie'",
      prisme: 0,
      article: 2,
      img: require('../assets/logo/marianne.png'),
      author: 'Etienne Girard',
      category: 'Politique',
      source: 'Marianne',
      content:
        <article>
          <p>Effarant pataquès autour de la participation à la primaire à gauche, ce lundi 23 janvier. L'organisateur, Christophe Borgel, reconnaît avoir fait modifier les résultats du scrutin, sous la pression des médias. Ou comment décrédibiliser un exercice démocratique...</p>
          <p>C'est un incroyable aveu qu'a fait le président du Comité national d'organisation de la primaire à gauche (Cnop), Christophe Borgel. Auprès de Libération, le député socialiste concède ce lundi 23 janvier... que les résultats du premier tour de la primaire ont été manipulés. Objectif de la manoeuvre ? Pouvoir revendiquer une belle participation avant que les chiffres ne l'accréditent.</p>
          <p>Tout commence à l'annonce des résultats du scrutin, ce dimanche vers 20h30. L'état-major du Parti socialiste se sait particulièrement attendu sur les chiffres de la participation. "Moins d' 1,5 million et on n'a plus qu'à vendre le fond de commerce", a prévenu il y a quelques jours le président de l'Assemblée nationale, Claude Bartolone, comme le rapporte Paris Match. "1,5 million constitue le plancher", a confirmé Christophe Borgel. Mais dans toutes les têtes, c'est bien 2 millions qu'il faudrait atteindre pour s'assurer de ne pas perdre la face.</p>
          <p>A 20h30, donc, comme par magie, le président de la Haute autorité de la primaire déclare qu'"entre 1,5 et 2 millions" de personnes se sont rendus aux urnes. Une fourchette encore large, ce qui n'est pas anormal à ce stade précoce du dépouillement. Mais Thomas Clay précise tout de même que le chiffre final sera "sans doute plus proche des 2 millions". Et Jean-Christophe Cambadélis, le premier secrétaire du PS, de plastronner aussitôt : "Nous avons réussi ce premier tour de la primaire. Les résultats sont dans l’épure de ce que nous avions fixé".</p>
          <p>L'information est immédiatement reprise par tous les médias. Elle fait les affaires du PS : si la participation reste moins forte qu'à la primaire de la droite ou à celle de 2011, elle demeure supérieure au plancher annoncé par les caciques de Solférino. Conclusion suggérée : la rose plie mais ne rompt décidément pas !</p>
          <h3>Un compteur qui disparaît</h3>
          <p>Sauf qu'un premier accroc est repéré par Marianne sur les coups de 23 heures : le compteur de la participation qui figure sur le site de la primaire, actualisé en direct... disparaît soudainement. Au dernier relevé, celui de 21h30, il n'avait pas encore passé la barre du million de votants. A 22h43, le compte Twitter de la primaire annonce 1,3 million de participants. Puis plus de nouvelles jusqu'à 10 heures du matin, quand le compteur réapparaît comme par magie, en affichant cette fois... 1,6 million. Il était temps, puisque plusieurs médias commençaient, dans la foulée de Marianne, à remettre en cause le chiffre officiel.</p>
          <p>Sauf que le total des voix obtenues par chaque candidat ne correspond pas à ce chiffre de participation. Comme le repère alors Libération, il manque 0,01%. Plus saisissant encore : les pourcentages attribués à chacun des candidats... sont à la virgule près les mêmes que la veille. Ce qui voudrait dire que tous les bureaux de vote dépouillés entre-temps auraient voté exactement de la même façon. Louche...</p>
          <p>Alors que l'interrogation commence à grandir sur les réseaux sociaux, un nouveau miracle se produit vers midi. Le 0,01% manquant - soit 160 voix - est ajouté... au compteur de Sylvia Pinel. La présidente du PRG se voit même nantie de 161 voix supplémentaires, soit une voix en trop par rapport au nombre de votants ! L'erreur est humaine…</p>
          <h3>"Il y avait beaucoup de pression"</h3>
          <p>Mis devant ces étonnantes contradictions, Christophe Borgel reconnaît finalement auprès de Libération une modification des scores de chacun des candidats pour arriver au chiffre de participation annoncé, soit 1,6 million de personnes, mais évoque un "bug". "Il y avait beaucoup de pression autour du niveau de participation, j'ai demandé à ce que les résultats soient actualisés au plus vite. Et effectivement, on a appliqué au nouveau total de votants les pourcentages de la veille", explique le député.</p>
          <p>Concernant les 161 voix de Sylvia Pinel, le président de la CNOP reconnaît encore une fois un tripatouillage. "(C'est) un bug aussi. Il y a eu bug sur bug. Je ne sais pas si c'est la société prestataire (qui gère les remontées des bureaux) ou le service informatique en interne qui est responsable."</p>
          <p>Pour l'instant, donc, impossible de savoir si même ce chiffre de 1,6 million de votants est fiable. La confiance est comme qui dirait… chancelante.</p>
          <h3>[Edit, 18h30] Borgel plaide "la connerie" d'un salarié du PS</h3>
          <p>Joint par Marianne en début de soirée, Christophe Borgel nie toute opération de gonflage artificiel de la participation, plaidant selon ses termes la "connerie d'un permanent" (un salarié du PS). Il explique avoir eu dès dimanche soir "des retours cohérents sur une participation entre 1,6 et 1,7 million de votants", un chiffre qu'il maintient ce lundi soir. "J'ai été questionné de toutes parts sur ce chiffre hier soir, nous raconte le député PS. Aussi, j'ai demandé à ce qu'on le publie à la première heure ce matin". A en croire Christophe Borgel, un salarié du PS aurait alors commis une erreur : au lieu d'ajouter le chiffre de la participation dans la base sans faire bouger le score des candidats, il aurait corrélé ces différentes données...</p>
          <p>Reste à savoir comment Christophe Borgel a pu disposer des chiffres de la participation sans avoir les résultats de chacun des prétendants. Selon ses dires, "le processus de validation des scores des candidats est rigoureux", ce qui explique que cette donnée soit plus longue à obtenir que la participation. "Les résultats détaillés devrait être annoncés ce soir par la Haute autorité", nous assure le parlementaire, qui croit déjà savoir qu'"ils ne changeront presque rien".</p>
          <p>"Cette erreur est rageante mais on n'a rien à cacher. Ceux qui voudront vérifier la concordance entre nos résultats et les PV de bureaux de vote seront libres de le faire", affirme encore Christophe Borgel auprès de Marianne. Avant de conclure, pince-sans-rire : "Si j'avais perdu la tête et que j'avais voulu gonfler le total, j'aurais annoncé plus de votants, vous ne croyez pas ?"</p>
        </article>
      }, {
        title: "Primaire de la gauche : les derniers résultats présentés sont… faux",
        prisme: 0,
        article: 3,
        img: 'http://cdn.konbini.com/wp-content/blogs.dir/3/files/2017/01/ok-capture-decran-2017-01-23-a-13.53.44.jpg',
        author: 'Cyrielle Bedu',
        category: 'Politique',
        source: 'Konbini',
        content:
          <article>
            <p>Le Parti socialiste souhaitait une forte participation à la primaire de la gauche, afin d’asseoir la légitimité du candidat désigné. Mais, alors que le premier tour s’est achevé hier, personne ne semble être d’accord quant au nombre de votants de ce scrutin. Et des résultats, publiés, se sont avérés être… faux.</p>
            <p>Benoît Hamon est arrivé en tête du premier tour de la primaire de la Belle Alliance Populaire, suivi par Manuel Valls, ancien Premier ministre de François Hollande. Dimanche 22 janvier à la mi-journée, le président du comité national d’organisation de la primaire, Christophe Borgel, annonçait 400 000 participants sur 63 % des bureaux de vote (en 2011, la participation était de 800 000 votants sur les deux tiers des bureaux de vote). Mais pour Christophe Borgel, cette faible participation était due au froid.</p>
            <p>Dans la soirée, le premier secrétaire du Parti socialiste Jean-Christophe Cambadélis déclarait que le scrutin avait été une réussite, entrant “dans l’épure” des objectifs que le PS s’était fixée. Sans donner de chiffres.</p>
            <p>Mais plus tard encore dans la soirée, le président de la Haute autorité de la primaire, Thomas Clay, annonçait que la participation se situait entre “1,5 million et 2 millions et demi de votants, sans doute plus proche des 2 millions”. Il donnait également les résultats provisoires du scrutin  : Benoît Hamon emportait 35,21 % des voix et Manuel Valls 31,5 % sur 3 090 bureaux de votes dépouillés (le nombre total des bureaux de vote étant de  7 530).</p>
            <p>L’écart entre le nombre de votants de la mi-journée et celui du début de soirée était donc très important. Comme le remarquait le site du magazine Marianne, à 21 h 30, le compteur de participation présent sur le site de la Primaire citoyenne était sous la barre du million, avant de disparaître mystérieusement. À la fin de la soirée électorale, vers 23 heures, un nouveau chiffre de participation était donné, en dessous cette fois du million et demi annoncé le même soir par le président de la Haute autorité, et encore plus loin donc des 2 millions également annoncés par Thomas Clay.</p>
            <p>Dans ses tweets de ce lundi 23 janvier, la Haute autorité de la primaire de la gauche appelle à mettre fin à la polémique autour des chiffres et annonce que sur 95 % des bureaux de vote, la participation se chiffre à 1,6 million de votants.</p>
            <h3>Des résultats… faux ce matin</h3>
            <p>Sauf qu’il y a un léger souci : bien que, sur le site de la primaire citoyenne, le nombre de participants au scrutin ait augmenté, car 95 % des bureaux sont pris en compte, les pourcentages attribués aux candidats restent les mêmes que la veille.</p>
            <p>C’est ainsi que Libération s’est rendu compte de la supercherie : si 350 000 votants ont été ajoutés entre 0 h 45 et 10 heures du matin ce lundi 23 janvier, donnant un total de 1,6 million de votants, les pourcentages sont… toujours les mêmes, à la virgule près.</p>
            <p>Et le quotidien de préciser qu’un détail justifie ce (gros) problème de calcul, donnant des résultats faux : il existe un écart de 160 voix entre le total des votants et l’accumulation de chaque voix des sept candidats. Soit un pourcentage de 0,01 % qui manque. Oups.</p>
            <p>En somme, entre 0 h 45 et la diffusion des résultats finaux à 10 heures ce matin, le site du Parti socialiste n’a pas (réellement) pris en compte près de 20 % des bulletins, les partageant de manière proportionnelle aux différents candidats en fonction de leur résultat de la veille.</p>
          </article>
        }, {
          title: "Résultats de la primaire à gauche : retour sur une journée de confusion et de polémique",
          prisme: 0,
          article: 4,
          img: 'http://media.rtl.fr/cache/zIQ6-PENzEeUQgK73Zox3g/795v530-0/online/image/2014/1010/7774762498_des-drapeaux-du-parti-socialiste.jpg',
          author: 'NC',
          category: 'Politique',
          source: 'Monde',
          content:
          <article>
            <p>La haute autorité a finalement communiqué des résultats « validés » et quasi complets, rejetant toute accusation de « manœuvre » ou « bidouillage ».</p>
            <p>Vingt-quatre heures après la clôture des bureaux de vote du premier tour de la primaire à gauche, dimanche 22 janvier, la haute autorité chargée du contrôle et de la validation a tenté de clore la polémique persistante sur les résultats et la participation avec un ultime communiqué de presse pour « apporter des précisions ».</p>
            <p>Dimanche soir, après des premières annonces de résultats sur un dépouillement encore partiel, les organisateurs de la primaire ont continué à mettre à jour les résultats sur leur site Internet, comme cela avait été le cas pour la primaire de la droite. Entre minuit et 10 heures du matin, lundi, 350 000 nouveaux votants sont ainsi apparus dans le décompte, mais, fait plus surprenant, sans que cela ne change pour autant les scores des candidats. Parfois au centième près, les pourcentages des résultats étaient les mêmes à minuit et à 10 heures, malgré les votants de plus. Ce qui n’aurait été possible qu’au prix d’une coïncidence statistiquement peu probable.</p>
            <h3>Un « bug » puis une « erreur humaine »</h3>
            <p>Les organisateurs de la primaire, et notamment le premier d’entre eux, le député socialiste Christophe Borgel, ont tout d’abord parlé d’un « bug », sans donner plus de détails, tout en livrant cet étonnant aveu à nos confrères de Libération : « Il y avait beaucoup de pression autour du niveau de participation, j’ai demandé à ce que les résultats soient actualisés au plus vite. Et effectivement, on a appliqué au nouveau total de votants les pourcentages de la veille. »</p>
            <p>Plus tard dans la journée, invité au micro de RTL, l’élu de Haute-Garonne a concédé les termes d’« erreur humaine », rejetant la faute sur un « permanent » du Parti socialiste. Ce dernier, a-t-il expliqué, aurait « mis sur la page [de résultats] le nouveau nombre de votants sans chercher à regarder où on en était des résultats [par candidat] ». Ce cadre du PS en a profité pour s’expliquer sur d’autres point suscitant encore des interrogations, comme le nombre de bureaux de vote effectivement ouverts dimanche.</p>
            <h3>Des résultats « validés » avec des écarts « marginaux »</h3>
            <p>Puis enfin, à 19 heures, c’est donc la haute autorité elle-même qui a communiqué des résultats « validés ». Sur 94,45 % des bureaux de vote validés (6 808), on compterait ainsi 1 597 720 votants, dont les voix se sont réparties de la manière suivante : 35,86 % pour Benoît Hamon, 31,22 % pour Manuel Valls, 17,3 % pour Arnaud Montebourg, 6,79 % pour Vincent Peillon, 3,82 % pour François de Rugy, 1,98 % pour Sylvia Pinel et 1 % pour Jean-Luc Bennahmias.</p>
            <p>Soit des chiffres assez proches de ceux annoncés dimanche soir (respectivement 35,21 %, 31,56 %, 18,7 %, 6,48 %, 3,49 %, 2,1 % et 1,6 %), ce que la haute autorité n’a pas manqué de relever : « Force est de constater que les écarts sont marginaux », écrit-elle dans un communiqué, en précisant que « l’intégralité des chiffres, par bureau, département, circonscription sera mise en ligne dans les vingt-quatre heures et accessible à tous ».</p>
            <p>De son côté, le président de cette même autorité a tenu à se défendre de toute « manœuvre » ou « bidouillage » sur le scrutin dans un entretien accordé au Monde. Assurant que « tout a bien fonctionné », Thomas Clay a plaidé « l’erreur d’affichage » : « Je conteste absolument et formellement les causes de cette effervescence auto-alimentée à partir de rien ou presque. Il n’y a aucun problème », a-t-il assuré.</p>
            <p>Selon Pierre Kanuty, conseiller régional socialiste d’Ile-de-France, le premier secrétaire du PS, Jean-Christophe Cambadélis, aurait même menacé de poursuites ceux contestant les résultats publiés par la haute autorité, à l’occasion du bureau national du parti qui se tient tous les lundis soir.</p>
          </article>
  }];

export default prisme1;
