var votesToGoEatCake = [true, true, true, true];

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];

var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3",
    "33", "999", "9"];

var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3",
    19, "19", 19 === "19", 6, false, false];


function give_duplicates(search_list)
{
    var dupe_list = [];
    var length = search_list.length;
    console.log(length);

    for (var i = 0; i < length; i++) 
    {
        for (var j = i + 1; j < length; j++)
        {
            if (search_list[i] === search_list[j])
            {
                if (search_list[i] in dupe_list)
                {
                 continue;
                }
                else
                {
                    dupe_list.push(search_list[i]);
                }
                
            }

        }
    }
    return dupe_list;
}


function give_duplicates(search_list)
{
    var dupe_dict = {};

    for (var n = 0; n < search_list.length; n++)
    {
        
        if (search_list[n] in dupe_dict)
        {
            dupe_dict[search_list[n]] += 1;
        }

        else
            {
                dupe_dict[search_list[n]] = 1;
            }
    }

    var dupe_list = [];

    for (var key in dupe_dict)
    {
        if (dupe_dict[key] > 1)
        {
            dupe_list.push(key);
        }
    }
    return dupe_list;

}

console.log(give_duplicates(votesToGoEatCake));
console.log(give_duplicates(hackbrightStudents));
console.log(give_duplicates(classroomIds));
console.log(give_duplicates(randomJunkIFound));