// inputs
t="ABDCDFES"
s="ADBC"


// sampels
"ADBC"
"ABDC"



const s_char_list = s.split("");

var permArr = [],
  usedChars = [];

function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    
    return permArr;
  };

function generate_word_list(char_list){
    const word_list_array  = permute(char_list);
    const word_list = word_list_array.map(
        (current_word_array)=>
            {
                return current_word_array.join('');
            }
    )
    console.log(word_list);
    return word_list;
}


const found_word = generate_word_list(s_char_list).filter(
    (current_word) => 
        {
            const isExist = t.includes(current_word);
            if
            (
                isExist
            )
                {
                    return current_word;
                }
        }
)


console.log(found_word);
