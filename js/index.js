/**
 * 根据用户传入参数生成随机密码
 * @param len 生成密码长度
 * @param type 密码类型
 * @returns {string|*}
 */
function randomCode(len, type) {
    len = len || 4;

    const Letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        Digital = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        Sign = ["!", "@", "#", "$", "%", "^", "&", "*"];

    let data = [],
        password = "",
        types = [];

    if (!type)
        type = "0,1,2,3";

    type.split(",").forEach(set => {
        switch (set) {
            case "0":
                types.push(Letter);
                break;
            case "1":
                types.push(letter);
                break;
            case "2":
                types.push(Digital);
                break;
            case "3":
                types.push(Sign);
                break;
            default:
                types = [Letter, letter, Digital, Sign];
                break;
        }
    });

    types.forEach(typeArray => {
        data.push(typeArray)
    });

    for (let i = 0; i <= len; i++) {
        let index = parseInt(Math.random() * data.length + 0);
        password += data[index][parseInt(Math.random() * data[index].length + 0)];
    }

    return password;
}


if (location["search"]) {
    try {
        let len,
            type = [];
        location["search"].split("?")[1].split("&").forEach(key => {
            switch (key.split("=")[0]) {
                case "l":
                    len = key.split("=")[1];
                    break;
                case "t":
                    type = key.split("=")[1];
                    break;
            }
        });
        document.write(randomCode(len, type));
    } catch (e) {
        document.write("参数错误")
    }
} else {
    document.write(randomCode());
}


