function infosort(algo)
{
    
    var algo=algo.replace(/\s/g, '');
   
    if(algo=="BubbleSort")
    {
     algo={
        'name': "Bubble Sort",
        'des':"It is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the"+
        " wrong order.The pass through the list is repeated until the list"+
        " is sorted. The algorithm, which is a comparison sort, is named for"+
        " the way smaller or larger elements \"bubble\" to the top of the"+
        " list. Although the algorithm is simple, it is too slow and"+
        " impractical for most problems",
        
        'bestcase_t':'O(n'+')',
        'worstcase_t':'O(n'+'\u00B2'+')',
        'worstcase_s':'O(1)',
   
   };
}

if(algo=="SelectionSort")
{
    algo={
        'name': "Selection Sort",
        'des':"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. "+
        "  Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.",
        
        'bestcase_t':'O(n'+'\u00B2'+')',
        'worstcase_t':'O(n'+'\u00B2'+')',
        'worstcase_s':'O(1)',
};
}

if(algo=="InsertionSort")
{
    algo={
        'name': "Insertion Sort",
        'des':"Insertion sort is based on the idea that one element from the input elements is consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array."+
        "It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. "+
        "However, insertion sort provides a stable sorting algorithm that will work correctly in all situations.",

        'bestcase_t':'O(n'+')',
        'worstcase_t':'O(n'+'\u00B2'+')',
        'worstcase_s':'O(1)',
}  ;
}

if(algo=="MergeSort")
{
    algo={
        'name': "Merge Sort",
        'des':"Merge sort is a divide and conquer algorithm that works by breaking down the array into smaller sub-arrays, sorting them individually, and then merging them back together  "+
        "Overall Merge Sort is an important concept to understand when it comes to algorithms.",

        'bestcase_t':'O(nlogn'+')',
        'worstcase_t':'O(nlogn'+')',
        'worstcase_s':'O(n)',
    } ;
        

}
if( algo=="QuickSort")
{
    algo={
        'name': "Quick Sort",
        'des':"Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,"+ 
         "according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.The sub-arrays are then sorted recursively."+ 
         "This can be done in-place, requiring small additional amounts of memory to perform the sorting. ",

        'bestcase_t':'O(nlogn'+')',
        'worstcase_t':'O(n'+'\u00B2'+')',
        'worstcase_s':'O(logn)',
       
    }
};

if(algo=="HeapSort")
{
    algo={
        'name': "Heap Sort",
        'des':"Heap sort processes the elements by creating the min-heap or max-heap using the elements of the given array. Min-heap or max-heap represents the ordering of array in which the root element represents the minimum or maximum element of the array. "+
        "The concept of heap sort is to eliminate the elements one by one from the heap part of the list, and then insert them into the sorted part of the list.",

        'bestcase_t':'O(nlogn'+')',
        'worstcase_t':'O(nlogn'+')',
        'worstcase_s':'O(1)',

        
    };

}
    $('.SortInfo h1:first').text(algo['name']);
    $('.SortInfo__Article p:first').text(algo['des']);
    $('table tbody tr:nth-child(1) td:nth-child(2) code').text(algo['worstcase_t']);
    $('table tbody tr:nth-child(2) td:nth-child(2) code').text(algo['bestcase_t']);
    $('table tbody tr:nth-child(3) td:nth-child(2) code').text(algo['worstcase_s']);
   
} 