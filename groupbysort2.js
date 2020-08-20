db.logs.group({
    "key": {
        "user_id": true
    },
    "initial": {
        "c": 0
    },
    "reduce": function(obj, prev) {
        if (obj.category_id instanceof Array) prev.c += obj.category_id.length;
        else prev.c++;
    }
});