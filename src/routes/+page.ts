import type { PageLoad } from './$types';

interface EntryData {
  name: String,
  summary: String,
  declaration: String,
  description: String,
  more?: String
}

const list: any = {
  base: [
    {
      name: "S()",
      summary: "pour String",
      declaration: "public static String S()",
      description: "Lire une chaine de caractères",
      more: "Note : ici, <code>S()</code> avec une majuscule"
    },

    {
      name: "b()",
      summary: "pour byte",
      declaration: "public static byte b()",
      description: "Lire un entier (byte)",
    },

    {
      name: "s()",
      summary: "pour short",
      declaration: "public static long s()",
      description: "Lire un entier (short)",
    },

    {
      name: "l()",
      summary: "pour long",
      declaration: "public static long l()",
      description: "Lire un entier (long)",
    },

    {
      name: "d()",
      summary: "pour double",
      declaration: "public static double d()",
      description: "Lire un réel (double)",
    },

    {
      name: "f()",
      summary: "pour float",
      declaration: "public static float f()",
      description: "Lire un réel (float)",
      more: "Note: les type <code>float</code> est très approximatif et se comporte très mal quand il est comparé, par ex:<br /><pre><code>float variable=3;\nif (variable == 3</code>) { ... }</pre>...peut renvoyer faux !"
    },

    {
      name: "c()",
      summary: "pour char",
      declaration: "public static char c()",
      description: "Lire un seul caractère (char)",
    },

    {
      name: "choixBinaire()",
      summary: "sort de booléen raté",
      declaration: "public static int choixBinaire()",
      description: "Lire un choix binaire (choisir entre 1 et 2)",
      more: "<b>IMPORTANT</b> : le renvoi, bien que \"choix<i>binaire</i>\", est un <code>int</code> !<br /><b>IMPORTANT</b> : voir aussi <a href='#f-choix'><code>choix</a></code>"
    },
  ],

  entier: [
    {
      name: "choix()",
      summary: "pour String",
      declaration: "public static int choix(int nbrChoix)",
      description: "Lire un choix entre 1 et <code>nbrChoix</code>",
      more: "<b>IMPORTANT</b> : voir aussi <a href='#f-choixbinaire'><code>choixBinaire</code></a>"
    },

    {
      name: "entierSupEgal()",
      summary: "pour String",
      declaration: "public static int entierSupEgal(int min)",
      description: "Lit un entier ≥ <code>min</code>",
      mode: "<ul><li><code>int min</code> : nombre minimum, inclusif</li></ul>"
    },

    {
      name: "entierInfEgal()",
      summary: "pour String",
      declaration: "public static int entierInfEgal(int max)",
      description: "Lit un entier ≤ <code>max</code>",
      mode: "<ul><li><code>int max</code> : nombre maximum, inclusif</li></ul>"
    },

    {
      name: "entierCompris()",
      summary: "pour String",
      declaration: "public static int entierCompris(int min, int max)",
      description: "Lit un entier compris dans un intervalle ferme<br/>Comprendre par là que l'intervalle est exclusif : <code>min</code> &lt; résultat &lt; <code>max</code>",
      mode: "<ul><li><code>int min</code> : nombre minimum, exclusif</li><li><code>int max</code> : nombre maximum, exclusif</li></ul>"
    },
  ],

  strs: [
    {
      name: "chaineEstUnEntier()",
      summary: "pour String",
      declaration: "public static boolean chaineEstUnEntier(String chaine)",
      description: "Teste si une chaine donnée est un entier",
    },

    {
      name: "chaineEstUnEntierPositif()",
      summary: "pour String",
      declaration: "public static boolean chaineEstUnEntierPositif(String chaine)",
      description: "Teste si une chaine donnée est un entier <i>strictement positif</i>",
    },

    {
      name: "chaineEstUnEntierNégatif()",
      summary: "pour String",
      declaration: "public static boolean chaineEstUnEntierNégatif(String chaine)",
      description: "Teste si une chaine donnée est un entier <i>strictement négatif</i>",
    },

    {
      name: "chaineEstLEntierNul()",
      summary: "pour String",
      declaration: "public static boolean chaineEstLEntierNul(String chaine)",
      description: "Teste si une chaine donnée est l'entier nul<br />Comprendre par là que la chaine, si elle est un entier, vaut 0",
    },

    {
      name: "separer()",
      summary: "pour String",
      declaration: "public static String separer(int nombre)",
      description: "Sépare les chiffres des grands nombres en regroupant les chiffres par 3 et les séparant par des virgules<br />Par exemple : <code>separer(123456) = \"1,234,567\"</code>",
      more:"<b>IMPORTANT</b> : l'argument <code>nombre</code> est un <code>int</code> et pas un <code>String</code> !"
    },
  ],

  plus: [
    {
      name: "separerEspaces()",
      summary: "pour String",
      declaration: "public static String separerEspaces(int nombre)",
      description: "Sépare les chiffres des grands nombres en regroupant les chiffres par 3 et les séparant par des espaces, parce que moi je compte en français :)<br />Par exemple : <code>separer(123456) = \"1 234 567\"</code>",
      more:"<b>IMPORTANT</b> : l'argument <code>nombre</code> est un <code>int</code> et pas un <code>String</code> !"
    },

    {
      name: "p()",
      summary: "pour String",
      declaration: "public static <PrintableToString> void p(PrintableToString... args)",
      description: "Juste un alias qui permet de simplement taper <code>Lire.p( ... )</code> au lieu de devoir écrire <code><i>System.out.print</i>( ... )</code> en entier",
      more: "Note : <code>p()</code> n'envoie pas de saut de ligne en fin de transmission (équivalant au print <i>sans</i> ln) ; voir aussi <a href='#f-ln'><code>ln()</code></a>"
    },

    {
      name: "ln()",
      summary: "pour String",
      declaration: "public static <PrintableToString> void p(PrintableToString... args)",
      description: "Juste un alias qui permet de simplement taper <code>Lire.p( ... )</code> au lieu de devoir écrire <code><i>System.out.println</i>( ... )</code> en entier",
      more: "Note : <code>ln()</code> envoie toujours un saut de ligne en fin de transmission (équivalant au print <i>avec</i> ln) ; voir aussi <a href='#f-p'><code>p()</code></a>"
    },
  ]
}

export const load: PageLoad = ({route}) => {
  console.log(route.id)
  return {
    list,
  }
}

