document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generate");
  const copyBtn = document.getElementById("copy");
  const passwordForm = document.getElementById("password");

  
  const WORDS = ["apple", "grape", "berry", "lemon", "melon", "cherry", "peach", "plum", "kiwi", "mango",
    "pear", "lime", "papaya", "berry", "olive", "fig", "date", "cocoa", "nut", "pine",
    "oak", "elm", "birch", "cedar", "maple", "fir", "pine", "yew", "ash", "beech",
    "red", "blue", "green", "yellow", "purple", "black", "white", "pink", "gray", "brown",
    "dog", "cat", "fish", "bird", "horse", "cow", "sheep", "goat", "pig", "deer",
    "car", "bus", "bike", "boat", "ship", "plane", "train", "truck", "van", "taxi",
    "sun", "moon", "star", "sky", "cloud", "rain", "snow", "wind", "storm", "fog",
    "book", "pen", "paper", "desk", "chair", "lamp", "bag", "clock", "phone", "key",
    "hat", "cap", "coat", "shirt", "pants", "shoe", "sock", "glove", "scarf", "tie",
    "ring", "gold", "silver", "iron", "steel", "copper", "zinc", "nickel", "chrome", "tin",
    "salt", "sugar", "honey", "rice", "wheat", "corn", "oats", "milk", "cheese", "butter",
    "egg", "meat", "fish", "chicken", "beef", "pork", "lamb", "duck", "turkey", "deer",
    "soup", "bread", "cake", "pie", "tea", "coffee", "juice", "water", "beer", "wine",
    "rose", "lily", "tulip", "daisy", "orchid", "poppy", "iris", "violet", "lilac", "jasmine",
    "city", "town", "village", "street", "road", "bridge", "river", "lake", "sea", "ocean",
    "hill", "mount", "valley", "forest", "desert", "island", "beach", "cave", "cliff", "dune",
    "wood", "stone", "brick", "glass", "cloth", "paper", "plastic", "rubber", "wool", "silk",
    "spring", "summer", "autumn", "winter", "day", "night", "morning", "evening", "noon", "midnight",
    "north", "south", "east", "west", "left", "right", "up", "down", "front", "back",
    "happy", "sad", "angry", "calm", "brave", "coward", "kind", "cruel", "wise", "foolish",
    "hot", "cold", "warm", "cool", "wet", "dry", "clean", "dirty", "light", "dark",
    "heavy", "light", "hard", "soft", "rough", "smooth", "sharp", "blunt", "thick", "thin",
    "fast", "slow", "quick", "lazy", "strong", "weak", "rich", "poor", "loud", "quiet",
    "high", "low", "deep", "shallow", "wide", "narrow", "long", "short", "big", "small",
    "round", "square", "flat", "steep", "loose", "tight", "full", "empty", "new", "old",
    "young", "old", "early", "late", "near", "far", "first", "last", "next", "previous",
    "good", "bad", "right", "wrong", "true", "false", "real", "fake", "open", "close",
    "start", "end", "begin", "finish", "come", "go", "stay", "leave", "enter", "exit",
    "bring", "take", "catch", "throw", "push", "pull", "lift", "drop", "hold", "release",
    "hit", "miss", "cut", "slice", "break", "fix", "clean", "dirty", "fill", "empty",
    "love", "hate", "like", "dislike", "praise", "blame", "reward", "punish", "help", "hinder",
    "laugh", "cry", "smile", "frown", "shout", "whisper", "speak", "listen", "ask", "answer",
    "give", "take", "buy", "sell", "pay", "owe", "win", "lose", "find", "lose",
    "build", "destroy", "create", "ruin", "raise", "lower", "increase", "decrease", "add", "subtract",
    "multiply", "divide", "equal", "differ", "agree", "argue", "accept", "reject", "approve", "deny",
    "teach", "learn", "remember", "forget", "know", "ignore", "understand", "confuse", "explain", "mystery",
    "see", "look", "watch", "observe", "notice", "ignore", "hear", "listen", "sound", "silence",
    "smell", "scent", "taste", "flavor", "touch", "feel", "sense", "numb", "pain", "pleasure",
    "think", "guess", "know", "doubt", "believe", "deny", "hope", "fear", "wish", "regret",
    "live", "die", "exist", "vanish", "survive", "perish", "grow", "shrink", "expand", "contract",
    "move", "stop", "run", "walk", "jump", "fall", "fly", "sink", "swim", "drown",
    "eat", "drink", "chew", "swallow", "bite", "lick", "suck", "blow", "inhale", "exhale",
    "sleep", "wake", "dream", "nightmare", "rest", "work", "play", "fight", "win", "lose",
    "read", "write", "draw", "paint", "sing", "dance", "act", "direct", "perform", "audience",
    "say", "tell", "talk", "speak", "shout", "whisper", "mute", "silent", "voice", "noise",
    "word", "letter", "sentence", "paragraph", "chapter", "book", "story", "tale", "poem", "song",
    "noun", "verb", "adjective", "adverb", "pronoun", "preposition", "conjunction", "interjection", "article", "phrase",
    "subject", "object", "predicate", "complement", "clause", "phrase", "tense", "mood", "voice", "speech",
    "number", "figure", "digit", "fraction", "decimal", "percent", "ratio", "average", "sum", "difference",
    "product", "quotient", "remainder", "constant", "variable", "equation", "formula", "theorem", "proof", "solution",
    "point", "line", "angle", "triangle", "square", "rectangle", "circle", "ellipse", "cube", "sphere",
    "length", "width", "height", "depth", "size", "area", "volume", "mass", "weight", "density",
    "speed", "velocity", "acceleration", "force", "gravity", "friction", "pressure", "heat", "temperature", "energy",
    "light", "sound", "electricity", "magnet", "atom", "molecule", "element", "compound", "mineral", "material",
    "plant", "flower", "leaf", "stem", "root", "seed", "fruit", "vegetable", "grain", "herb",
    "animal", "mammal", "bird", "fish", "reptile", "amphibian", "insect", "spider", "shell", "coral",
    "human", "man", "woman", "child", "baby", "parent", "family", "relative", "friend", "enemy",
    "head", "face", "eye", "nose", "mouth", "ear", "hair", "brain", "mind", "thought",
    "neck", "shoulder", "arm", "hand", "finger", "chest", "heart", "lung", "stomach", "liver",
    "back", "waist", "hip", "leg", "foot", "toe", "skin", "bone", "muscle", "nerve",
    "blood", "cell", "gene", "organ", "system", "body", "health", "disease", "medicine", "doctor",
    "school", "class", "lesson", "teacher", "student", "homework", "exam", "grade", "degree", "career",
    "job", "work", "task", "duty", "role", "position", "office", "company", "industry", "market",
    "money", "coin", "note", "bank", "account", "loan", "debt", "credit", "tax", "price",
    "buy", "sell", "pay", "charge", "cost", "value", "profit", "loss", "income", "expense",
    "house", "home", "room", "door", "window", "floor", "roof", "wall", "ceiling", "furniture",
    "table", "chair", "bed", "sofa", "shelf", "cabinet", "drawer", "mirror", "picture", "lamp",
    "dish", "bowl", "plate", "cup", "glass", "bottle", "jar", "pot", "pan", "stove",
    "knife", "fork", "spoon", "chopstick", "brush", "comb", "razor", "scissors", "needle", "thread",
    "hat", "cap", "helmet", "hood", "crown", "band", "ribbon", "bow", "tie", "scarf",
    "shirt", "blouse", "jacket", "coat", "dress", "skirt", "pants", "jeans", "shorts", "trousers",
    "sock", "shoe", "boot", "sandal", "slipper", "glove", "mitten", "ring", "watch", "bracelet",
    "bag", "basket", "box", "case", "can", "bottle", "jar", "jug", "pot", "pan",
    "pen", "pencil", "brush", "chalk", "crayon", "marker", "eraser", "ruler", "scissors", "stapler",
    "book", "note", "card", "letter", "paper", "envelope", "stamp", "album", "diary", "calendar",
    "picture", "photo", "image", "paint", "sketch", "draw", "design", "pattern", "shape", "color",
    "music", "song", "tune", "melody", "rhythm", "beat", "note", "chord", "scale", "harmony",
    "dance", "step", "jump", "spin", "twist", "turn", "slide", "swing", "shake", "wave",
    "game", "play", "sport", "race", "match", "round", "score", "win", "lose", "draw",
    "toy", "doll", "bear", "ball", "kite", "bike", "car", "train", "plane", "boat"];

  generateBtn.addEventListener("click", function () {
    const mode = document.getElementById("mode").value;
    if (mode === "random") {
      passwordForm.value = getRandomStr(document.forms.form_password);
    } else if (mode === "meaningful") {
      passwordForm.value = getMeaningfulStr(document.forms.form_password);
    }
  });

  copyBtn.addEventListener("click", function () {
    copyToClipboard();
  });

  function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }

  function ensureCharacterTypes(option, result) {
    const types = [
      { checked: option["low_character"].checked, chars: "abcdefghijklmnopqrstuvwxyz" },
      { checked: option["upper_character"].checked, chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
      { checked: option["number"].checked, chars: "0123456789" },
      { checked: option["symbol"].checked, chars: option["symbol_val"].value },
    ];

    types.forEach(type => {
      if (type.checked && !new RegExp('[' + type.chars + ']').test(result)) {
        const replaceIndex = Math.floor(Math.random() * result.length);
        const replaceChar = type.chars[Math.floor(Math.random() * type.chars.length)];
        result = result.substring(0, replaceIndex) + replaceChar + result.substring(replaceIndex + 1);
      }
    });

    return result;
  }

  function getRandomStr(option) {
    const PASSWORD_LEN = option["length"].value;
    let result = "";
    let source = "";
  
    if (option["low_character"].checked) {
      source += "abcdefghijklmnopqrstuvwxyz";
    }
    if (option["upper_character"].checked) {
      source += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (option["number"].checked) {
      source += "0123456789";
    }
    if (option["symbol"].checked) {
      source += option["symbol_val"].value;
    }
  
    for (let i = 0; i < PASSWORD_LEN; i++) {
      result += source[Math.floor(Math.random() * source.length)];
    }
  
    if (option["number"].checked && option["symbol"].checked) {
      result += "0123456789"[Math.floor(Math.random() * 10)];
      result += option["symbol_val"].value[Math.floor(Math.random() * option["symbol_val"].value.length)];
    }
  
    result = result.slice(0, PASSWORD_LEN);
    result = shuffleString(result);
    result = ensureCharacterTypes(option, result);
  
    return result;
  }

  function getMeaningfulStr(option) {
    const PASSWORD_LEN = option["length"].value;
    let result = "";
    let source = WORDS;

    if (option["low_character"].checked) {
      source = source.concat("abcdefghijklmnopqrstuvwxyz".split(''));
    }
    if (option["upper_character"].checked) {
      source = source.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''));
    }
    if (option["number"].checked) {
      source = source.concat("0123456789".split(''));
    }
    if (option["symbol"].checked) {
      source = source.concat(option["symbol_val"].value.split(''));
    }
  
    while (result.length < PASSWORD_LEN) {
      let next = source[Math.floor(Math.random() * source.length)];
      if (result.length + next.length > PASSWORD_LEN) {
        next = next.substring(0, PASSWORD_LEN - result.length);
      }
      result += next;
    }

    if (option["number"].checked && option["symbol"].checked) {
      result += "0123456789"[Math.floor(Math.random() * 10)];
      result += option["symbol_val"].value[Math.floor(Math.random() * option["symbol_val"].value.length)];
    }

    result = result.slice(0, PASSWORD_LEN);
    result = shuffleString(result);
    result = ensureCharacterTypes(option, result);
  
    return result;
  }
  
  function copyToClipboard() {
    let password = document.getElementById("password").value;
    navigator.clipboard
      .writeText(password)
      .then(function () {
        console.log("Text copied to clipboard");
      })
      .catch(function (error) {
        console.error("Error copying text: ", error);
      });
  }
});