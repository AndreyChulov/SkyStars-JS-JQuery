let tableGenerator= {
    GenerateCell:function (rowNumber, columnNumber){
        $(`#skyRow_${rowNumber}`)
            .append(`<td id="skyCell_${rowNumber}_${columnNumber}"></td>`);
        //$(`#skyRow_${rowNumber}`).append("<td></td>");
        //$(`#skyRow_${rowNumber} td:last`)
        //    .attr("id", `skyCell_${rowNumber}_${columnNumber}`);
    },

    GenerateCells:function (rowNumber, columnsCount){
        for (let counter = 0; counter < columnsCount; counter++){
            this.GenerateCell(rowNumber, counter)
        }
    },

    GenerateRow:function (rowNumber, columnsCount){
        $("#TableRoot table").append(`<tr id="skyRow_${rowNumber}"></tr>`);
        //$("#TableRoot table").append("<tr></tr>");
        //$("#TableRoot table tr:last").attr("id", `skyRow_${rowNumber}`);
        this.GenerateCells(rowNumber, columnsCount)
    },

    GenerateRows:function (rowsCount, columnsCount){
        for (let counter = 0; counter < rowsCount; counter++){
            this.GenerateRow(counter, columnsCount)
        }
    },

    GenerateTable: function(rowsCount, columnsCount){
        $("#TableRoot").append("<table></table>")
        this.GenerateRows(rowsCount, columnsCount);
    }
}
