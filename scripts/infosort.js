function infosort(algo)
{
    
    var algo=algo.replace(/\s/g, '');
   
    if(algo=="BubbleSort")
    {
     algo={
        'name': "Bubble Sort",
        'des':"It is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the"+
        "wrong order.The pass through the list is repeated until the list"+
        "is sorted. The algorithm, which is a comparison sort, is named for"+
        "the way smaller or larger elements \"bubble\" to the top of the"+
        "list. Although the algorithm is simple, it is too slow and"+
        "impractical for most problems",
        
        'bestcase_t':'O(n'+'\u00B2'+')',
        'worstcase_t':'O(n'+'\u00B2'+')',
        'bestcase_s':'O(1)',
        'worstcase_s': 'O(n'+'\u00B2'+')',
   
   };
}
    

    $('.SortInfo h1:first').text(algo['name']);
    $('.SortInfo__Article p:first').text(algo['des']);
    $('table tbody tr:nth-child(1) td:nth-child(2) code').text(algo['worstcase_t']);
    $('table tbody tr:nth-child(2) td:nth-child(2) code').text(algo['bestcase_t']);
    $('table tbody tr:nth-child(3) td:nth-child(2) code').text(algo['worstcase_s']);
    $('table tbody tr:nth-child(4) td:nth-child(2) code').text(algo['bestcase_s']);

} 