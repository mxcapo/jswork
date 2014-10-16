// Return a list of the duplicates

var votesToGoEatCake = [true, true, true, true];

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];

var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3",
    "33", "999", "9"];

var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3",
    19, "19", 19 === "19", 6, false, false];


function in_array(array, value)
{
    for (var i = 0; i < array.length; i++)
    {
        if (array[i] === value)
        {
            return true;
        }

    }
    return false;
}



function give_duplicates(search_list)
{
    var dupe_dict = {};
    var dump_list = [];

    for (var n = 0; n < search_list.length; n++)
    {
        var obj_type = typeof(search_list[n]);
        var search_item = search_list[n] + obj_type;
        
        if (search_item in dupe_dict)
        {
            if (in_array(dump_list, search_list[n]) === true)
            {
                continue;
            }
            else
            {
                dump_list.push(search_list[n]);
            }
        }

        else
            {
                dupe_dict[search_item] = search_list[n];
            }
    }
    return dump_list;
}

console.log(give_duplicates(votesToGoEatCake));
console.log(give_duplicates(hackbrightStudents));
console.log(give_duplicates(classroomIds));
console.log(give_duplicates(randomJunkIFound));