export function DateOffset(offset){
    var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth() + 1 + offset;

    const numDays = (y, m) => new Date(y, m, 0).getDate();
    var day = numDays(year, month);

    return `${year.toString()}-${month.toString()}-${day.toString()}`;
}