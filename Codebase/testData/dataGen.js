var data = [{
		"code": "// Java program for recursive implementation\n// of Bubble sort\n \nimport java.util.Arrays;\n \npublic class GFG\n{\n    // A function to implement bubble sort\n    static void bubbleSort(int arr[], int n)\n    {\n        // Base case\n        if (n == 1)\n            return;\n      \n        // One pass of bubble sort. After\n        // this pass, the largest element\n        // is moved (or bubbled) to end.\n        for (int i=0; i<n-1; i++)\n            if (arr[i] > arr[i+1])\n            {\n                // swap arr[i], arr[i+1]\n                int temp = arr[i];\n                arr[i] = arr[i+1];\n                arr[i+1] = temp;\n            }\n      \n        // Largest element is fixed,\n        // recur for remaining array\n        bubbleSort(arr, n-1);\n    }\n     \n    // Driver Method\n    public static void main(String[] args)\n    {\n        int arr[] = {64, 34, 25, 12, 22, 11, 90};\n      \n        bubbleSort(arr, arr.length);\n         \n        System.out.println(\"Sorted array : \");\n        System.out.println(Arrays.toString(arr));\n    }\n}",
		"title": "Recursive Bubble Sort",
		"description": "Background : \nBubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.\nExample: \nFirst Pass: \n( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. \n( 1 5 4 2 8 ) –> ( 1 4 5 2 8 ), Swap since 5 > 4 \n( 1 4 5 2 8 ) –> ( 1 4 2 5 8 ), Swap since 5 > 2 \n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.\nSecond Pass: \n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) \n( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \nNow, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.\nThird Pass: \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )\nFollowing is iterative Bubble sort algorithm : \n\n// Iterative Bubble Sort\nbubbleSort(arr[], n)\n{\n  for (i = 0; i < n-1; i++)      \n\n     // Last i elements are already in place   \n     for (j = 0; j < n-i-1; j++)\n     {\n         if(arr[j] > arr[j+1])\n             swap(arr[j], arr[j+1]);\n     }\n} \n\nHow to implement it recursively? \nRecursive Bubble Sort has no performance/implementation advantages, but can be a good question to check one’s understanding of Bubble Sort and recursion.\nIf we take a closer look at Bubble Sort algorithm, we can notice that in first pass, we move largest element to end (Assuming sorting in increasing order). In second pass, we move second largest element to second last position and so on. \nRecursion Idea.  \n\nBase Case: If array size is 1, return.\nDo One Pass of normal Bubble Sort. This pass fixes last element of current subarray.\nRecur for all elements except last of current subarray.",
		"isPublic": true,
		"language": "java",
		"tags": [
			"algorithm",
			"arrays",
			"class",
			"for-loop",
			"function",
			"java",
			"list",
			"loops",
			"performance"
		],
		"userId": "EampleUserOne"
	},
	{
		"code": "// C program to implement recursive Binary Search\n#include <stdio.h>\n \n// A recursive binary search function. It returns\n// location of x in given array arr[l..r] is present,\n// otherwise -1\nint binarySearch(int arr[], int l, int r, int x)\n{\n    if (r >= l) {\n        int mid = l + (r - l) / 2;\n \n        // If the element is present at the middle\n        // itself\n        if (arr[mid] == x)\n            return mid;\n \n        // If element is smaller than mid, then\n        // it can only be present in left subarray\n        if (arr[mid] > x)\n            return binarySearch(arr, l, mid - 1, x);\n \n        // Else the element can only be present\n        // in right subarray\n        return binarySearch(arr, mid + 1, r, x);\n    }\n \n    // We reach here when element is not\n    // present in array\n    return -1;\n}\n \nint main(void)\n{\n    int arr[] = { 2, 3, 4, 10, 40 };\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int x = 10;\n    int result = binarySearch(arr, 0, n - 1, x);\n    (result == -1)\n        ? printf(\"Element is not present in array\")\n        : printf(\"Element is present at index %d\", result);\n    return 0;\n}",
		"title": "Binary Search",
		"description": "Problem: Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].\n\nExamples: \n\nInput: arr[] = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170}, x = 110\nOutput: 6\nExplanation: Element x is present at index 6\n\nInput: arr[] = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170}, x = 175\nOutput: -1\nExplanation: Element x is not present in arr[].\n\nLinear Search Approach: A simple approach is to do a linear search. The time complexity of the Linear search is O(n). Another approach to perform the same task is using Binary Search.  \n\nBinary Search Approach: \n\nBinary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). \n\nBinary Search Algorithm: The basic steps to perform Binary Search are:\n\nBegin with an interval covering the whole array.\nIf the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.\nOtherwise, narrow it to the upper half.\nRepeatedly check until the value is found or the interval is empty.\n\nStep-by-step Binary Search Algorithm: We basically ignore half of the elements just after one comparison.\n\nCompare x with the middle element.\nIf x matches with the middle element, we return the mid index.\nElse If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.\nElse (x is smaller) recur for the left half.",
		"isPublic": true,
		"language": "c",
		"tags": [
			"c",
			"class",
			"algorithm"
		],
		"userId": "EampleUserOne"
	},
	{
		"code": "#include <iostream>\n#include <string>\n#include <locale> \n#include <stdio.h>\n#include <fstream>\n\nusing namespace std;\n\n//struct to hold info pulled in from book file\nstruct Book\n{\n\tstring Title;\n\tstring Author;\n\tint Word_Count;\n\tdouble Char_Count[26] = { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 };\n\tint Line_Count;\n};\n\nint main() {\n\n\tbool Another_Book = false;\n\tdo {\n\t\tstring File, Line, Book_Text = \"\", Char_Count, AB;\n\t\tint Total_Char = 0;\n\n\t\tcout << \"Please enter the name of the file to be read. (Include .txt)\" << endl;\n\t\tcin >> File;\n\n\t\t//finding user's file\n\t\tfstream Text;\n\t\tText.open(File, ios::in);\n\n\t\tif (Text.fail()) {\n\t\t\tcout << \"There was an error reading in the file, please restart.\" << endl;\n\t\t\tAnother_Book = true;\n\t\t\tcontinue;\n\t\t}\n\t\telse {\n\n\t\t\tBook Read_Book;\n\t\t\tRead_Book.Word_Count = 0;\n\t\t\tRead_Book.Line_Count = 0;\n\n\t\t\t//steps through file line by line\n\t\t\twhile (getline(Text, Line)) {\n\t\t\t\tif (Read_Book.Line_Count == 0 && Line != \"\") {\n\t\t\t\t\tRead_Book.Title = Line;\n\t\t\t\t\tRead_Book.Line_Count++;\n\t\t\t\t}\n\t\t\t\telse if (Read_Book.Line_Count == 1 && Line != \"\") {\n\t\t\t\t\tRead_Book.Author = Line;\n\t\t\t\t\tRead_Book.Line_Count++;\n\t\t\t\t}\n\t\t\t\telse if (Read_Book.Line_Count >= 1 && (Line != \"\" and Line != \"Contents:\")) {\n\t\t\t\t\tBook_Text += Line;\n\t\t\t\t\tRead_Book.Line_Count++;\n\n\t\t\t\t\t//counting the numbers based on total spaces\n\t\t\t\t\tfor (size_t i = 0; i < Line.length(); i++) {\n\t\t\t\t\t\tif (Line.at(i) == 32)\n\t\t\t\t\t\t\tRead_Book.Word_Count++;\n\t\t\t\t\t}\n\t\t\t\t\tRead_Book.Word_Count++;\n\n\t\t\t\t\t//determines the frequency of characters in each line\n\t\t\t\t\tfor (int L = 65; L <= 90; L++) {\n\t\t\t\t\t\tfor (size_t z = 0; z < Line.length(); z++) {\n\t\t\t\t\t\t\tif (Line.at(z) == L || Line.at(z) == L + 32) {\n\t\t\t\t\t\t\t\tRead_Book.Char_Count[L - 65] += 1;\n\t\t\t\t\t\t\t\tTotal_Char++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tRead_Book.Line_Count -= 2;\n\n\t\t\t//create output file\n\t\t\tfstream data;\n\t\t\tdata.open(\"CardCatalog.txt\", ios::app);\n\n\t\t\t//output data to file\n\t\t\tdata << \"Title : \" << Read_Book.Title << endl\n\t\t\t\t<< \"Author Full Name : \" << Read_Book.Author << endl\n\t\t\t\t<< \"Author First Name : \" << Read_Book.Author.substr(0, Read_Book.Author.find(\" \")) << endl\n\t\t\t\t<< \"Author Last Name : \" << (Read_Book.Author.substr(Read_Book.Author.find(\" \") + 1)) << endl\n\t\t\t\t<< \"Word Count : \" << Read_Book.Word_Count << endl\n\t\t\t\t<< \"Line Count : \" << Read_Book.Line_Count << endl << endl;\n\n\t\t\t//optional letter frequency output conditional\n\t\t\tcout << \"Do you wish to see the letter frequency?(Y/N)\" << endl;\n\t\t\tcin >> Char_Count;\n\t\t\tif (Char_Count == \"Y\") {\n\t\t\t\tcout << Read_Book.Title << \" letter frequency:\" << endl;\n\t\t\t\tfor (int c = 0; c < 26; c++) {\n\t\t\t\t\tcout << char(c + 65) << \" : \" << (Read_Book.Char_Count[c] / Total_Char) * 100 << \"%\" << endl;\n\t\t\t\t}\n\t\t\t}\n\n\t\t}\n\n\t\tcout << \"Would you like to do another book?(Y/N)\" << endl;\n\t\tcin >> AB;\n\n\t\tif (AB == \"Y\")\n\t\t\tAnother_Book = true;\n\t\telse\n\t\t\tAnother_Book = false;\n\n\t} while (Another_Book);\n\n\treturn 0;\n}",
		"title": "DS HW1",
		"description": "DS HW1",
		"isPublic": true,
		"language": "c++",
		"tags": [

		],
		"userId": "EampleUserOne"
	},
	{
		"code": "<script>\n// Javascript program for insertion sort \n   \n// Function to sort an array using insertion sort\nfunction insertionSort(arr, n) \n{ \n    let i, key, j; \n    for (i = 1; i < n; i++)\n    { \n        key = arr[i]; \n        j = i - 1; \n   \n        /* Move elements of arr[0..i-1], that are \n        greater than key, to one position ahead \n        of their current position */\n        while (j >= 0 && arr[j] > key)\n        { \n            arr[j + 1] = arr[j]; \n            j = j - 1; \n        } \n        arr[j + 1] = key; \n    } \n} \n   \n// A utility function to print an array of size n \nfunction printArray(arr, n) \n{ \n    let i; \n    for (i = 0; i < n; i++) \n        document.write(arr[i] + \" \"); \n    document.write(\"<br>\");\n} \n   \n// Driver code\n    let arr = [12, 11, 13, 5, 6 ]; \n    let n = arr.length; \n   \n    insertionSort(arr, n); \n    printArray(arr, n); \n     \n// This code is contributed by Mayank Tyagi\n   \n</script>",
		"title": "Insertion Sort JS",
		"description": "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.\nAlgorithm \nTo sort an array of size n in ascending order: \n1: Iterate from arr[1] to arr[n] over the array. \n2: Compare the current element (key) to its predecessor. \n3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.\n\nExample: \n12, 11, 13, 5, 6\nLet us loop for i = 1 (second element of the array) to 4 (last element of the array)\ni = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12 \n11, 12, 13, 5, 6\ni = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13 \n11, 12, 13, 5, 6\ni = 3. 5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position. \n5, 11, 12, 13, 6\ni = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position. \n5, 6, 11, 12, 13 ",
		"isPublic": true,
		"language": "javascript",
		"tags": [
			"algorithm",
			"arrays",
			"for-loop",
			"function",
			"javascript",
			"insertion"
		],
		"userId": "EampleUserOne"
	},
	{
		"code": "// C++ program for implementation of selection sort \n#include <bits/stdc++.h>\nusing namespace std;\n  \nvoid swap(int *xp, int *yp) \n{ \n    int temp = *xp; \n    *xp = *yp; \n    *yp = temp; \n} \n  \nvoid selectionSort(int arr[], int n) \n{ \n    int i, j, min_idx; \n  \n    // One by one move boundary of unsorted subarray \n    for (i = 0; i < n-1; i++) \n    { \n        // Find the minimum element in unsorted array \n        min_idx = i; \n        for (j = i+1; j < n; j++) \n        if (arr[j] < arr[min_idx]) \n            min_idx = j; \n  \n        // Swap the found minimum element with the first element \n        swap(&arr[min_idx], &arr[i]); \n    } \n} \n  \n/* Function to print an array */\nvoid printArray(int arr[], int size) \n{ \n    int i; \n    for (i=0; i < size; i++) \n        cout << arr[i] << \" \"; \n    cout << endl; \n} \n  \n// Driver program to test above functions \nint main() \n{ \n    int arr[] = {64, 25, 12, 22, 11}; \n    int n = sizeof(arr)/sizeof(arr[0]); \n    selectionSort(arr, n); \n    cout << \"Sorted array: \\n\"; \n    printArray(arr, n); \n    return 0; \n} ",
		"title": "Selection Sort C++",
		"description": "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\n1) The subarray which is already sorted. \n2) Remaining subarray which is unsorted.\nIn every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. \nFollowing example explains the above steps: \n \n\n \n\narr[] = 64 25 12 22 11\n\n// Find the minimum element in arr[0...4]\n// and place it at beginning\n11 25 12 22 64\n\n// Find the minimum element in arr[1...4]\n// and place it at beginning of arr[1...4]\n11 12 25 22 64\n\n// Find the minimum element in arr[2...4]\n// and place it at beginning of arr[2...4]\n11 12 22 25 64\n\n// Find the minimum element in arr[3...4]\n// and place it at beginning of arr[3...4]\n11 12 22 25 64 ",
		"isPublic": true,
		"language": "c++",
		"tags": [
			"algorithm",
			"arrays",
			"c++",
			"for-loop",
			"function",
			"sorting"
		],
		"userId": "EampleUserOne"
	},
	{
		"code": "# Recursive Python program for insertion sort\n# Recursive function to sort an array using insertion sort\n \ndef insertionSortRecursive(arr,n):\n    # base case\n    if n<=1:\n        return\n     \n    # Sort first n-1 elements\n    insertionSortRecursive(arr,n-1)\n    '''Insert last element at its correct position\n        in sorted array.'''\n    last = arr[n-1]\n    j = n-2\n     \n      # Move elements of arr[0..i-1], that are\n      # greater than key, to one position ahead\n      # of their current position\n    while (j>=0 and arr[j]>last):\n        arr[j+1] = arr[j]\n        j = j-1\n \n    arr[j+1]=last\n     \n# A utility function to print an array of size n\ndef printArray(arr,n):\n    for i in range(n):\n        print(arr[i],end=\" \")\n \n# Driver program to test insertion sort\narr = [12,11,13,5,6]\nn = len(arr)\ninsertionSortRecursive(arr, n)\nprintArray(arr, n)",
		"title": "Recursive Insertion Sort Python3",
		"description": "Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.\nBelow is an iterative algorithm for insertion sort\nAlgorithm \n\n// Sort an arr[] of size n\ninsertionSort(arr, n) \n    Loop from i = 1 to n-1.\n       a) Pick element arr[i] and insert\n          it into sorted sequence arr[0..i-1] \n\nHow to implement it recursively? \nRecursive Insertion Sort has no performance/implementation advantages, but can be a good question to check one’s understanding of Insertion Sort and recursion.\nIf we take a closer look at Insertion Sort algorithm, we keep processed elements sorted and insert new elements one by one in the sorted array.",
		"isPublic": true,
		"language": "python",
		"tags": [
			"algorithm",
			"python-3.x",
			"python",
			"recursive"
		],
		"userId": "EampleUserOne"
	},
	{
		"code": "// C# program for implementation\n// of Bubble Sort\nusing System;\n \nclass GFG\n{\n    static void bubbleSort(int []arr)\n    {\n        int n = arr.Length;\n        for (int i = 0; i < n - 1; i++)\n            for (int j = 0; j < n - i - 1; j++)\n                if (arr[j] > arr[j + 1])\n                {\n                    // swap temp and arr[i]\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n    }\n \n    /* Prints the array */\n    static void printArray(int []arr)\n    {\n        int n = arr.Length;\n        for (int i = 0; i < n; ++i)\n            Console.Write(arr[i] + \" \");\n        Console.WriteLine();\n    }\n \n    // Driver method\n    public static void Main()\n    {\n        int []arr = {64, 34, 25, 12, 22, 11, 90};\n        bubbleSort(arr);\n        Console.WriteLine(\"Sorted array\");\n        printArray(arr);\n    }\n \n}",
		"title": "Bubble Sort c#",
		"description": "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.\nExample: \nFirst Pass: \n( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. \n( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 \n( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 \n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.\nSecond Pass: \n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) \n( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) \nNow, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.\nThird Pass: \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) ",
		"isPublic": true,
		"language": "c#",
		"tags": [
			"algorithm",
			"arrays",
			"c#",
			"class",
			"function",
			"for-loop",
			"list",
			"testing"
		],
		"userId": "EampleUserOne"
	},
	{
		"code": "// Our data object\nvar data = { a: 1 }\n\n// The object is added to a Vue instance\nvar vm = new Vue({\n  data: data\n})\n\n// Getting the property on the instance\n// returns the one from the original data\nvm.a == data.a // => true\n\n// Setting the property on the instance\n// also affects the original data\nvm.a = 2\ndata.a // => 2\n\n// ... and vice-versa\ndata.a = 3\nvm.a // => 3",
		"title": "Vue Instance Template",
		"description": "When a Vue instance is created, it adds all the properties found in its data object to Vue’s reactivity system. When the values of those properties change, the view will “react”, updating to match the new values.",
		"isPublic": true,
		"language": "javascript",
		"tags": [
			"javascript",
			"vue.js"
		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "// C++ code to linearly search x in arr[]. If x\n// is present then return its location, otherwise\n// return -1\n \n#include <iostream>\nusing namespace std;\n \nint search(int arr[], int n, int x)\n{\n    int i;\n    for (i = 0; i < n; i++)\n        if (arr[i] == x)\n            return i;\n    return -1;\n}\n \n// Driver code\nint main(void)\n{\n    int arr[] = { 2, 3, 4, 10, 40 };\n    int x = 10;\n    int n = sizeof(arr) / sizeof(arr[0]);\n   \n    // Function call\n    int result = search(arr, n, x);\n    (result == -1)\n        ? cout << \"Element is not present in array\"\n        : cout << \"Element is present at index \" << result;\n    return 0;\n}",
		"title": "Linear Search",
		"description": "Problem: Given an array arr[] of n elements, write a function to search a given element x in arr[].\n\nExamples :  \n\nInput : arr[] = {10, 20, 80, 30, 60, 50, \n                     110, 100, 130, 170}\n          x = 110;\nOutput : 6\nElement x is present at index 6\n\nInput : arr[] = {10, 20, 80, 30, 60, 50, \n                     110, 100, 130, 170}\n           x = 175;\nOutput : -1\nElement x is not present in arr[].\n\nA simple approach is to do a linear search, i.e  \n\nStart from the leftmost element of arr[] and one by one compare x with each element of arr[]\nIf x matches with an element, return the index.\nIf x doesn’t match with any of elements, return -1.",
		"isPublic": true,
		"language": "c++",
		"tags": [
			"c++",
			"class",
			"function",
			"for-loop",
			"loops",
			"list",
			"arrays",
			"testing"
		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "nav {\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  li {\n    display: inline-block;\n  }\n  a {\n    display: block;\n    padding: 6px 12px;\n    text-decoration: none;\n  }\n}",
		"title": "Sass Nesting",
		"description": "Sass lets you nest CSS selectors in the same way as HTML.\n\nLook at an example of some Sass code for a site's navigation:",
		"isPublic": true,
		"language": "sass",
		"tags": [
			"css"
		],
		"userId": "EampleUserOne"
	},
	{
		"code": "#include <fstream>\n#include <iostream>\n#include <string>\n#include <vector>\n#include <math.h>\n#include <locale> \n#include <stdio.h>\n\nusing namespace std;\n\nint Matt = 0;\n\n//=======================================================================================================================================================================================================\n\n// Intro and players\nint Intro(){\n    \n    cout << endl <<\"WHEEL OF FORTUNE!!\\nLadies and Gentleman your host Matthew Schlager!!\\n\\nHello and Welcome to the WHEEL OF FORTUNE.\\n(**When playing this game please enter all answers in capital Letters)\\nBefore we begin how many people will be playing today (2 - 4)?\" << endl;\n    \n    bool error = false;\n    int NumPlayers = 0;\n    \n    while (!error){\n    \n        cin >> NumPlayers;\n    \n        if ((NumPlayers < 2) || (NumPlayers > 4)){\n            error = false;\n            cout << \"That is too many players (2 - 4). Please re-enter the number of players.\" << endl;\n        }\n    \n        else{\n            error = true;\n        }\n    \n    }\n    \n    return NumPlayers;\n}\n\n//=======================================================================================================================================================================================================\n//Number of Games to be played\n\nint NumGames(){\n\n    cout << endl << \"How many games will we be playing today?\" << endl;\n\n    int games = 0;\n    cin >> games;\n    \n    return games;\n    \n}\n\n//=======================================================================================================================================================================================================\n//Gets puzzle from textfile puzzle.txt\n\nstring getPuzzle(string &catagory){\n    \n    ifstream puzzles(\"puzzle.txt\");\n    \n    int randomNum = rand() % 100 + 1, numOfLines = 0;\n    string ActualPuzzle, line;\n\n\n    while(getline(puzzles, line)){\n        \n        ++numOfLines;\n\n        if(numOfLines == randomNum){\n            \n            ActualPuzzle = line;\n            \n        }\n    \n    }\n    \n    //puzzle.txt is orginized by catagory, this shows catagory\n    if ((randomNum >= 1) && (randomNum <= 10))\n        catagory = \"Rhyme Time\";\n    else if ((randomNum >= 11) && (randomNum <= 20))\n        catagory = \"Quotes\";\n    else if ((randomNum >= 21) && (randomNum <= 30))\n        catagory = \"Fictional Characters\";\n    else if ((randomNum >= 31) && (randomNum <= 40))\n        catagory = \"Landmarks\";\n    else if ((randomNum >= 41) && (randomNum <= 50))\n        catagory = \"Megaword\";\n    else if ((randomNum >= 51) && (randomNum <= 60))\n        catagory = \"Place\";\n    else if ((randomNum >= 61) && (randomNum <= 70))\n        catagory = \"TV Show\";\n    else if ((randomNum >= 71) && (randomNum <= 80))\n        catagory = \"Song\";\n    else if ((randomNum >= 81) && (randomNum <= 90))\n        catagory = \"Song Lyrics\";\n    else \n        catagory = \"Slogans\";\n        \n    return ActualPuzzle;\n    \n}\n\n//=======================================================================================================================================================================================================\n//setting up the string used for displaying a board of /'s\n\nstring displayX(string Puzzle){\n    \n    string DisplayX = Puzzle;\n    \n    for (int l = 0; l <= Puzzle.length(); l++){\n        \n        if (Puzzle[l] >= 65 && Puzzle[l] <= 90){\n            \n            DisplayX[l] = 92;\n            \n        }\n        \n    }\n    \n    return DisplayX;\n    \n}\n\n//=======================================================================================================================================================================================================\n//displaying the string DisplayX\n\nvoid Display(string DisplayX, string catagory){\n    \n    cout << \"The Catagory for this puzzle is \" << catagory <<endl << \"------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\" << endl << \"| \";\n    \n    for (int i = 0; i < DisplayX.size(); i++){\n        \n        cout << \" \" << DisplayX[i] << \" |\";\n    \n    }\n    \n    cout << endl << \"------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\" << endl;\n\n    \n}\n\n//=======================================================================================================================================================================================================\n//spinning the wheel\n\nvoid Spin(int &spinVal){\n\n    cout << endl;\n    \n    if ((rand() % 100 + 1) == 32){\n        \n        spinVal = 1000000;\n        cout << \"OH MY WORD!! You landed on $1,000,000\";\n        \n    }\n    else{\n        \n        int randomNum = rand() % 19 + 1;\n        \n        if (randomNum == 11){\n            \n            spinVal = 0;\n            cout << \"UH OH. Looks like you landed on Bankrupt, which brings you down to 0.\" << endl;\n        \n        }\n        else{\n            \n            spinVal = randomNum * 100;\n            cout << \"Nicely Done! You landed on $\" << spinVal;\n        \n        }\n    \n    }\n\n}\n\n//=======================================================================================================================================================================================================\n\nstring removeSpaces(string remove_from_me) {\n    \n    int k = remove_from_me.length();\n\t\n\tfor (int i = 0; i <= k; i++) {\n\t\t\n\t\tif (isspace(remove_from_me[i])) {\n\t\t\t\n\t\t\tremove_from_me.erase(remove_from_me.begin() + i);\n\t\t\n\t\t}\n\t\n\t}\n\t\n\treturn remove_from_me;\n\n}\n\nvoid GameOver(string Puzzle,string UserGuess, string PlayerNames, string catagory){\n    \n    Puzzle = removeSpaces(Puzzle);\n    UserGuess = removeSpaces(UserGuess);\n    \n    int x = 0;\n    \n    for (int i = 0; i < Puzzle.length();i++){\n        \n        if (Puzzle[i] == UserGuess[i]){\n            \n            x += 1;\n        \n        }\n    \n    }   \n\n    if (x == Puzzle.length()){\n        \n        cout << endl << \"Congrats!! \" << PlayerNames << \" you solved the puzzle!!\";\n        Matt = 88;\n    \n    }\n    else\n        Matt = 66;\n\n}\n\n//=======================================================================================================================================================================================================\n\nint Solve (string Puzzle, string name, string catagory){\n    \n    cout << \"You have elected to solve the puzzle, type it out exactly as it appears (include all characters)\" << endl;\n    \n    char UserGuess[Puzzle.length()];\n    cin.ignore();\n    cin.getline(UserGuess, Puzzle.length());\n\n    GameOver(Puzzle,UserGuess,name,catagory);\n    \n    if (Matt != 88){\n        \n        cout << \"Sorry looks like that was wrong.\";\n        return 66;  \n    \n    }\n    else\n        return 88;\n\n}\n\n//=======================================================================================================================================================================================================\n\nvoid Choice (string &alpha,char &Letter){\n    \n    cout << endl << \"You have elected to select a Letter, below are the avaible letters.\" << endl;\n    \n    for (int i = 0; i <= alpha.length();i++){\n        \n        cout << \"| \" << alpha[i] << \" \";\n    \n    }\n    \n    cin >> Letter;\n    \n    for (int z = 0; z <= alpha.length(); z++){\n    \n        if (alpha[z] == Letter)\n            alpha[z] = 92;\n    \n    }\n\n}\n\n//=======================================================================================================================================================================================================\n\nvoid checkletter(char Letter,string &Puzzle,string &DisplayX,int &counter){\n    \n    for (int z = 0; z <= Puzzle.length(); z++){\n        \n        if (Puzzle[z] == Letter){\n            \n            DisplayX[z] = Letter;\n            counter += 1;\n        \n        }\n        \n    }\n\n}\n\n//=======================================================================================================================================================================================================\n\nvoid buyVowels(int &PlayerScore, string PlayerNames, string &vowel, int &counter, string Puzzle, string &DisplayX){\n    \n    cout << PlayerNames << \" you have elected to buy a vowel, lets look at the vowels on the board.\" << endl << endl;\n    \n    for (int i = 0; i <= vowel.size(); i++){\n    \n        cout << \"| \" << vowel[i] << \" \";\n    \n    }\n    \n    cout << endl;\n    \n    char vowelselect;\n    cin >> vowelselect;\n    \n    counter = 0;\n    checkletter(toupper(vowelselect),Puzzle,DisplayX,counter);\n    \n    for (int z = 0; z <= vowel.length(); z++){\n    \n        if (vowel[z] == toupper(vowelselect)){\n    \n            vowel[z] = 92;\n            \n        }\n    \n    }\n    \n    if (!(counter == 0)){\n        \n        PlayerScore -= counter * 200;\n        \n        cout << endl << \"Well \" << PlayerNames << \" it looks like there were \" << counter << \" \" << vowelselect << \"'s\" << endl << \"That will cost you $\" << counter * 200 << endl;\n        counter = 0;\n        Matt = 77;\n        \n    }\n    else{\n        \n        cout << endl << \"Well \" << PlayerNames << \" it looks like there were no \" << vowelselect << \"'s\" << endl;\n        Matt = 66;\n        \n    }\n\n}\n\n//=======================================================================================================================================================================================================\n\nmain(){\n    \n    // Intro and Number Player\n    int NumPlayers = Intro();\n    \n    // Player Names and Setting up scores\n    vector<string> PlayerNames;\n    vector<int> PlayerScore;\n    \n    string Name ;\n    cout << endl << \"That's Great!! Let's get to names.\" << endl;\n    \n    for (int i = 1; i <= NumPlayers; i++){\n        \n        cout << \"Please Enter the Name of Player \" << i << endl;\n        cin >> Name;\n        PlayerNames.push_back(Name);\n        PlayerScore.push_back(0);\n    \n    }\n    \n    int numGames = NumGames();\n    \n    // Let the games begin\n    for (int j = 1; j <= numGames; j++){\n        \n        //Getting a catagory and puzzle\n        string catagory;\n        string Puzzle = getPuzzle(catagory);\n        \n        //Displaying a hidden puzzle\n        string DisplayX = displayX(Puzzle);\n        \n        string alpha = \"BCDFGHJKLMNPQRSTVWXYZ\", vowel = \"AEIOU\";\n        int vowels = 0, x = 1, spinVal = 0, decide = 0;\n        \n        for (int y = 0; y < 2;){\n            \n            for (int k = 0;k <= NumPlayers - 1; k++){\n                \n                cout << endl << PlayerNames[k] << \" let's take a look at the puzzle!\" << endl;\n                \n                Display(DisplayX,catagory);\n                \n                decide = 0;\n                cout << endl << PlayerNames[k] << \" would you like to spin the wheel(press 1) or solve(press 2)?\";\n                cin >> decide;\n                \n                if (decide == 1)\n                    Spin(spinVal);\n                \n                else{\n                \n                    Matt = Solve(Puzzle,PlayerNames[k], catagory);\n                \n                    if (Matt == 66)\n                        goto End1;\n                    if (Matt == 88)\n                        goto End2;\n                    \n                }\n                \n                if (!(spinVal == 0)){\n                    \n                    char Letter ;\n                    Choice(alpha,Letter);\n                    int counter = 0;\n                    checkletter(Letter,Puzzle,DisplayX,counter);\n                    \n                    if (!(counter == 0)){\n                        \n                        cout << endl << \"Well \" << PlayerNames[k] << \" it looks like there were \" << counter << \" \" << Letter << \"'s\" << endl;\n                        PlayerScore[k] += spinVal * counter;\n                        GameOver(Puzzle,DisplayX,PlayerNames[k],catagory);\n                    \n                        if (Matt == 88)\n                            goto End2;\n                        \n                        End: \n                        Matt = 0; \n                    \n                        if (vowels <= 5){\n                    \n                            cout << \"This brings your total up to $\" << PlayerScore[k] << endl << endl << PlayerNames[k] << \" would you like spin again(press 1) or buy a vowel(press 2)?\";\n                            \n                            int zz = 0;\n                            cin >> zz;\n                            \n                            if (zz == 1){\n                    \n                                k = k - 1;\n                    \n                            }\n                    \n                            else if (zz == 2) {\n                    \n                                counter = 0;\n                                buyVowels(PlayerScore[k],PlayerNames[k],vowel,counter,Puzzle,DisplayX);\n                                vowels = vowels + 1;\n                    \n                                if (Matt == 77)\n                                    goto End;\n                    \n                                GameOver(Puzzle,DisplayX,PlayerNames[k],catagory);\n                                    \n                                cout << \"This brings your total up to $\" << PlayerScore[k] << endl << endl;\n                                \n                                if (Matt == 88)\n                                    goto End2;\n                                \n                                if (Matt == 66)\n                                    goto End1;\n                    \n                            }\n                    \n                        }\n                    \n                        else{\n                    \n                            cout << \"This brings your total up to $\" << PlayerScore[k] << endl << endl;\n                            k = k - 1;\n                    \n                        }\n                    \n                    }\n                    \n                    else\n                        cout << \"OH, looks like there are no \" << Letter << \"'s\" << endl;\n                \n                }\n                \n                End1: \n                Matt = 0;\n                \n                if(k == NumPlayers - 1){\n                    k = -1;\n                \n                }\n            \n            }\n            \n            if (Matt = 100){\n            \n                End2:\n                Matt = 0;\n                cout << endl << endl << \"The scores after this round are below.\" << endl;\n            \n                for (int q = 0; q <= NumPlayers - 1; q++){\n            \n                    cout << PlayerNames[q] << \": $\" << PlayerScore[q] << endl;\n                    y = 4;\n        \n                }\n        \n            }\n        \n        }\n\n    }\n    \n    cout << endl <<\"Congrats! You have finished the game! I hope you had fun and we will see you next time.\\nI'm Matthew Schlager and this has been WHEEL OF FORTUNE\";\n    \n}",
		"title": "WheelOfFortune",
		"description": "Check my other post for puzzle.txt",
		"isPublic": true,
		"language": "c++",
		"tags": [
			".net",
			"algorithm",
			"arrays",
			"c++",
			"class",
			"dictionary",
			"dataframe",
			"for-loop",
			"file",
			"function",
			"loops",
			"list",
			"performance",
			"powershell",
			"recursive",
			"regex",
			"script",
			"shell",
			"skeleton-code",
			"string",
			"visual-studio"
		],
		"userId": "EampleUserTwo"
	},
	{
		"code": "/* C program for Merge Sort */\n#include <stdio.h>\n#include <stdlib.h>\n  \n// Merges two subarrays of arr[].\n// First subarray is arr[l..m]\n// Second subarray is arr[m+1..r]\nvoid merge(int arr[], int l, int m, int r)\n{\n    int i, j, k;\n    int n1 = m - l + 1;\n    int n2 = r - m;\n  \n    /* create temp arrays */\n    int L[n1], R[n2];\n  \n    /* Copy data to temp arrays L[] and R[] */\n    for (i = 0; i < n1; i++)\n        L[i] = arr[l + i];\n    for (j = 0; j < n2; j++)\n        R[j] = arr[m + 1 + j];\n  \n    /* Merge the temp arrays back into arr[l..r]*/\n    i = 0; // Initial index of first subarray\n    j = 0; // Initial index of second subarray\n    k = l; // Initial index of merged subarray\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) {\n            arr[k] = L[i];\n            i++;\n        }\n        else {\n            arr[k] = R[j];\n            j++;\n        }\n        k++;\n    }\n  \n    /* Copy the remaining elements of L[], if there\n    are any */\n    while (i < n1) {\n        arr[k] = L[i];\n        i++;\n        k++;\n    }\n  \n    /* Copy the remaining elements of R[], if there\n    are any */\n    while (j < n2) {\n        arr[k] = R[j];\n        j++;\n        k++;\n    }\n}\n  \n/* l is for left index and r is right index of the\nsub-array of arr to be sorted */\nvoid mergeSort(int arr[], int l, int r)\n{\n    if (l < r) {\n        // Same as (l+r)/2, but avoids overflow for\n        // large l and h\n        int m = l + (r - l) / 2;\n  \n        // Sort first and second halves\n        mergeSort(arr, l, m);\n        mergeSort(arr, m + 1, r);\n  \n        merge(arr, l, m, r);\n    }\n}\n  \n/* UTILITY FUNCTIONS */\n/* Function to print an array */\nvoid printArray(int A[], int size)\n{\n    int i;\n    for (i = 0; i < size; i++)\n        printf(\"%d \", A[i]);\n    printf(\"\\n\");\n}\n  \n/* Driver code */\nint main()\n{\n    int arr[] = { 12, 11, 13, 5, 6, 7 };\n    int arr_size = sizeof(arr) / sizeof(arr[0]);\n  \n    printf(\"Given array is \\n\");\n    printArray(arr, arr_size);\n  \n    mergeSort(arr, 0, arr_size - 1);\n  \n    printf(\"\\nSorted array is \\n\");\n    printArray(arr, arr_size);\n    return 0;\n}",
		"title": "Merge Sort C",
		"description": "Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See the following C implementation for details.\n\nMergeSort(arr[], l,  r)\nIf r > l\n     1. Find the middle point to divide the array into two halves:  \n             middle m = l+ (r-l)/2\n     2. Call mergeSort for first half:   \n             Call mergeSort(arr, l, m)\n     3. Call mergeSort for second half:\n             Call mergeSort(arr, m+1, r)\n     4. Merge the two halves sorted in step 2 and 3:\n             Call merge(arr, l, m, r)\n\nTime Complexity: Sorting arrays on different machines. Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. \nT(n) = 2T(n/2) + θ(n)\n\nThe above recurrence can be solved either using the Recurrence Tree method or the Master method. It falls in case II of Master Method and the solution of the recurrence is θ(nLogn). Time complexity of Merge Sort is  θ(nLogn) in all 3 cases (worst, average and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.\nAuxiliary Space: O(n)\nAlgorithmic Paradigm: Divide and Conquer\nSorting In Place: No in a typical implementation\nStable: Yes",
		"isPublic": true,
		"language": "c",
		"tags": [
			"c",
			"function",
			"loops"
		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "A FRIEND TO THE END\nA LOCKET IN YOUR POCKET\nA SNAIL AND A WHALE\nAFTER DARK\nALONG CAME A SPIDER AND SAT DOWN BESIDE HER\nAN ATTITUDE OF GRATITUDE\nAN OLDIE BUT A GOODIE\nANTS IN YOUR PANTS\nAPRIL SHOWERS BRING MAY FLOWERS\nAS SNUG AS A BUG IN A RUG\nRAPUNZEL RAPUNZEL LET DOWN YOUR HAIR\nREMEMBER THE ALAMO\nROSEBUD\nSCOTTY BEAM ME UP\nSHE GAVE THEM SOME BROTH WITHOUT ANY BREAD\nSHE SELLS SEASHELLS BY THE SEASHORE\nSHOW ME THE MONEY!\nSIMPLE SIMON MET A PIEMAN\nSNAP OUT OF IT!\nSWOON I'LL CATCH YOU\nA DAMSEL IN DISTRESS\nA GIANT ROBOT\nA HOWLING WEREWOLF\nA KNIGHT IN SHINING ARMOR\nA PHANTOM HOLDING A SICKLE\nA VAMPIRE FREAKING OUT AT A RAY OF SUNLIGHT\nABOMINABLE SNOWMAN\nACE VENTURA\nACHILLES\nAGAMEMNON\nTHE LIBRARY OF CONGRESS\nTHE LINCOLN MEMORIAL\nTHE LION MONUMENT\nTHE LONDON PALLADIUM\nTHE LOUVRE MUSEUM\nTHE MATTERHORN\nTHE METROPOLITAN MUSEUM OF ART\nTHE MILLENNIUM BRIDGE\nTHE MOB MUSEUM\nTHE MUSEUM OF ITALIAN ART\nAMBIVALENCE\nAPERITIF\nCHRYSANTHEMUM\nCIRCUMFERENCE\nCOGNIZANT\nCOMMENDATION\nCONTORTIONIST\nCOPACETIC\nENTREPRENEUR\nEROTICISM\nDOUGLAS WYOMING\nDOVER DELAWARE\nDRESDEN GERMANY\nDUBLIN BAY\nDUBLIN IRELAND\nDUBUQUE IOWA\nDULUTH\nDULUTH MINNESOTA\nDUNDEE SCOTLAND\nDURANGO\nTHROUGH THE WORMHOLE WITH MORGAN FREEMAN\nTHE TONIGHT SHOW STARRING JIMMY FALLON\nNBC NIGHTLY NEWS WITH BRIAN WILLIAMS\nTHE REAL HOUSEWIVES OF BEVERLY HILLS\nLAW AND ORDER SPECIAL VICTIMS UNIT\nAMERICA'S FUNNIEST HOME VIDEOS\nHARVEY BIRDMAN ATTORNEY AT LAW\nLATE SHOW WITH DAVID LETTERMAN\nLAW & ORDER SPECIAL VICTIMS UNIT\nLAW & ORDER: SPECIAL VICTIMS UNIT\nUNFORGETTABLE\nPHILADELPHIA FREEDOM\nSUBTERRANEAN HOMESICK BLUES\nSUPERSTITION\nEVERYTHING'S COMING UP ROSES\nTALLAHASSEE LASSIE\nCALIFORNIA DREAMIN'\nCAPPUCCINO BAR\nEVERYBODY'S TALKIN'\nEVERYTHING I DO I DO IT FOR YOU\nHERE A QUACK THERE A QUACK EVERYWHERE A QUACK QUACK\nHAVE A YABBA-DABBA-DOO TIME A SABBATICAL DOO TIME\nWE'RE GONNA ROCK ROCK ROCK 'TIL THE BROAD DAYLIGHT\nI WRITE THE SONGS THAT MAKE THE WHOLE WORLD SING\nTHEY SAY THE NEON LIGHTS ARE BRIGHT ON BROADWAY\nU MAKE MY LIFE COMPLETE V MEANS YOU'RE VERY SWEET\nA SPOONFUL OF SUGAR HELPS THE MEDICINE GO DOWN\nFAIRY TALES CAN COME TRUE IT CAN HAPPEN TO YOU\nJINGLE BELLS JINGLE BELLS JINGLE ALL THE WAY\nJUST LIKE A PICTURE PRINT BY CURRIER AND IVES\nDOGS RULE\nBETTER SOUND THROUGH RESEARCH\nTHINK DIFFERENT\nLIFE GETS EASIER\nLIVE CLARITIN CLEAR\nSTAY CLARITIN CLEAR\nSUBWAY EAT FRESH\nTHE DIAMOND STORE\nAMERICA RUNS ON DUNKIN'\nBECAUSE YOU'RE WORTH IT",
		"title": "Puzzle.txt",
		"description": "",
		"isPublic": true,
		"language": "asciiarmor",
		"tags": [

		],
		"userId": "EampleUserTwo"
	},
	{
		"code": "#pragma once\n#include <iostream>\nusing namespace std;\n\ntemplate <class T> class Node {\nprivate:\n\npublic:\n\n\tT* data;\n\tNode * next;\n\tNode() {}\n\tNode(T* input) {\n\t\tdata = input;\n\t}\n\t~Node() {\n\t\tdata = nullptr;\n\t}\n};\n\ntemplate <class T>\nclass LinkedList {\nprivate:\n\n\tNode<T> * head;\n\tint length ;\n\tNode<T> * current ;\n\npublic:\n\n\tLinkedList() {\n\t\thead = nullptr;\n\t\tlength = 0;\n\t\tcurrent = nullptr;\n\t}\n\n\tvoid AddItem(T* item);\n\tT * GetItem(T* item);\n\tbool IsInList(T* item);\n\tT * Find(T* item);\n\tbool IsEmpty();\n\tint Size();\n\tT * SeeNext();\n\tT * SeeAt(int index);\n\tvoid Reset();\n\tvoid Print();\n\n\t~LinkedList() {\n\t\tfor (int i = 0; i < length; i++) {\n\t\t\tNode<T> * temp = head;\n\t\t\thead = head->next;\n\t\t\tdelete temp;\n\t\t}\n\t\tlength = 0;\n\t}\n};\n\n\ntemplate <class T>\nvoid LinkedList<T>::AddItem(T * item) {\n\tlength++;\n\tNode<T> * adder = new Node<T>(item);\n\tif (head == nullptr) {\n\t\thead = adder;\n\t\tcurrent = head;\n\t}\n\telse {\n\t\tNode<T> * temp = head;\n\t\twhile (temp->next != nullptr) {\n\t\t\ttemp = temp->next;\n\t\t}\n\t\ttemp->next = adder;\n\t}\n\t//Print();\n}\n\ntemplate <class T>\nT* LinkedList<T>::GetItem(T* item) {\n\tif (head == nullptr) {\n\t\treturn nullptr;\n\t}\n\n\tif (head->data->operator==(item)) {\n\t\tNode<T> * temp = head;\n\t\thead = head->next;\n\t\tT* RetVal = temp->data;\n\t\tdelete temp; // or temp->next = NULL;\n\t\tlength--;\n\t\treturn RetVal;\n\t}\n\n\tNode<T> * Ptr = head;\n\twhile (Ptr->next != nullptr) {\n\t\tif (Ptr->next->data->operator==(item)) {\n\t\t\tNode<T> * temp = Ptr->next;\n\t\t\tPtr->next = Ptr->next->next;\n\t\t\tT* RetVal = temp->data;\n\t\t\tdelete temp; // or temp->next = NULL;\n\t\t\t//delete Ptr;\n\t\t\tlength--;\n\t\t\treturn RetVal;\n\t\t}\n\t\tPtr = Ptr->next;\n\t}\n\treturn nullptr;\n}\n\ntemplate <class T>\nbool LinkedList<T>::IsInList(T* item) {\n\tNode<T> * Ptr = head;\n\tif (Ptr == nullptr)\n\t\treturn false;\n\tif (Ptr->data->operator==(item)) {\n\t\treturn true;\n\t}\n\twhile (Ptr->next != nullptr) {\n\t\tif (Ptr->next->data->operator==(item)) {\n\t\t\treturn true;\n\t\t}\n\t\tPtr = Ptr->next;\n\t}\n\treturn false;\n}\n\ntemplate <class T>\nT * LinkedList<T>::Find(T* item) {\n\t\n\tNode<T> * Ptr = head;\n\tif (Ptr->data->operator==(item)) {\n\t\treturn Ptr->data;\n\t}\n\twhile (Ptr->next != nullptr) {\n\t\tif (Ptr->next->data->operator==(item)) {\n\t\t\treturn Ptr->next->data;\n\t\t}\n\t\tPtr = Ptr->next;\n\t}\n\treturn nullptr;\n}\n\ntemplate <class T>\nbool LinkedList<T>::IsEmpty() {\n\tif (head == nullptr) {\n\t\treturn true;\n\t}\n\treturn false;\n}\n\ntemplate <class T>\nint LinkedList<T>::Size() {\n\treturn length;\n}\n\ntemplate <class T>\nT* LinkedList<T>::SeeNext() {\n\tif (head == nullptr) {\n\t\t//\t\tthrow EmptyListError;\n\t}\n\tNode<T> * temp = current;\n\tthis->current = this->current->next;\n\treturn temp->data;\n}\n\ntemplate <class T>\nT* LinkedList<T>::SeeAt(int index) {\n\tif (index > length) {\n\t\treturn nullptr;\n\t}\n\tNode<T> * temp;\n\ttemp = this->head;\n\n\tfor (int i = 0; i < index ; i++) {\n\t\tif (temp->next != nullptr) {\n\t\t\ttemp = temp->next;\n\t\t}\n\t}\n\n\t//this->current = temp->next;\n\tif (temp == nullptr) {\n\t\treturn nullptr;\n\t}\n\n\treturn temp->data;\n}\n\ntemplate <class T>\nvoid LinkedList<T>::Reset() {\n\tfor (int i = 0; i < length; i++) {\n\t\tNode<T> * temp = head;\n\t\thead = head->next;\n\t\tdelete temp;\n\t}\n\tlength = 0;\n}\n\ntemplate <class Part>\nvoid LinkedList<Part>::Print() {\n\tNode<Part> * temp = head;\n\tPart * b;\n\tfor (int i = 0; i < length; i++) {\n\t\tb = temp->data;\n\t\tb->Print();\n\t\ttemp = temp->next;\n\t\tif (i != length - 1)\n\t\t\tcout << \" /\\\\ \" << endl << \" || \" << endl;\n\t}\n}\n\n",
		"title": "DS LinkedList",
		"description": "DS LinkedList",
		"isPublic": false,
		"language": "c++",
		"tags": [

		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "from math import sin,cos\n\ndef fixed_point_iteration(f, x=1.0):\n    \n    # Fixed point pi:\n    \"\"\"\n    >>> print(fixed_point_iteration(lambda x: sin(x) + x, 3.0))\n    (3.141592653589793, 3)\n    >>> print(fixed_point_iteration(lambda x: cos(x), 1.0))\n    (0.7390851332151611, 86)\n    \"\"\"\n\n    step = 0\n    while not approx_fixed_point(f, x):\n        x = f(x)\n        step += 1\n    return x, step\n\ndef approx_fixed_point(f, x):\n    if (abs(f(x) - x) > 0.000000000000001):\n        return False\n    return True\n\ndef newton_find_zero(f,f2, x=1.0):\n    \n    # Newtons's pi\n    \"\"\"\n    >>> print(newton_find_zero(lambda x: sin(x) , lambda x: cos(x), 3.0))\n    (3.141592653589793, 3)\n    >>> print(newton_find_zero(lambda x: cos(x) - x , lambda x: -sin(x)-1, 1.0))\n    (0.7390851332151607, 4)\n    \"\"\"\n\n    step = 0\n    while (abs(f(x)) > 0.000000000000001):\n        x = x - (f(x)/f2(x))\n        step += 1\n    return x, step\n\ndef _test():\n    import doctest\n    doctest.testmod(verbose=True)\n\nif __name__ == \"__main__\":\n    _test()\n    \n    print(\"\\nFixed point pi: {}\".format(fixed_point_iteration(lambda x: sin(x) + x, 3.0)))\n    print(\"Newtons pi: {}\".format(newton_find_zero(lambda x: sin(x) , lambda x: cos(x), 3.0)))\n    print(\"Fixed point dottie: {}\".format(fixed_point_iteration(lambda x: cos(x), 1.0)))\n    print(\"Newtons Dottie: {}\".format(newton_find_zero(lambda x: cos(x) - x , lambda x: -sin(x)-1, 1.0)))\n\n    print(\"\"\"\\n1. The methods are similar when calculating pi to the 15 decimal. They both used three iterations\n2. Newtons method is far superior in calculting dottie, it only needed 4 iterations while fixed point needed 86\"\"\")\n    ",
		"title": "Python HW2",
		"description": "HW2",
		"isPublic": false,
		"language": "python",
		"tags": [

		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "#include \"Stack.h\"\n#pragma once\nusing namespace std;\n\nstruct Node {\n\tint * data;\n\tNode * next;\n};\n\nclass QueueLinkedList {\nprivate:\n\n\tNode *head, *rear;\n\tint NumCards;\n\tint RoundsWon;\n\tStack UserSideDeck;\n\npublic:\n\n\tQueueLinkedList();\n\t~QueueLinkedList();\n\n\tvoid insert(int * n);\n\tvoid deleteitem();\n\tint * Peek();\n\tint getNumCards();\n\tint getRoundsWon();\n\tvoid AddRoundWon();\n\tint getSideStackSize();\n\tint * SideStackPeek();\n\tvoid SideStackPop();\n\tvoid SideStackInsert(int * x);\n\n};\n\nQueueLinkedList::QueueLinkedList()\n{\n\thead = nullptr;\n\trear = nullptr;\n\tNumCards = 0;\n\tRoundsWon = 0;\n}\n\nQueueLinkedList :: ~QueueLinkedList()\n{\n\twhile (head != NULL)\n\t{\n\t\tNode *temp = head;\n\t\thead = head->next;\n\t\tdelete temp;\n\t}\n\trear = NULL;\n}\n\nvoid QueueLinkedList::insert(int * n) {\n\n\tNode * temp = new Node;\n\n\ttemp->data = n;\n\ttemp->next = nullptr;\n\n\tif (head == nullptr) {\n\t\thead = temp;\n\t\trear = temp;\n\t}\n\telse {\n\t\trear->next = temp;\n\t\trear = temp;\n\t}\n\n\tNumCards++;\n}\n\nvoid QueueLinkedList::deleteitem() {\n\n\tif (head == rear) {\n\t\thead = nullptr;\n\t\trear = nullptr;\n\t}\n\telse {\n\t\thead = head->next;\n\t}\n\n\tNumCards--;\n}\n\nint * QueueLinkedList::Peek() {\n\treturn head->data;\n}\n\nint QueueLinkedList::getNumCards() {\n\treturn NumCards + UserSideDeck.size();\n}\n\nint QueueLinkedList::getRoundsWon() {\n\treturn RoundsWon;\n}\n\nvoid QueueLinkedList::AddRoundWon() {\n\tRoundsWon++;\n}\n\nint QueueLinkedList::getSideStackSize() {\n\treturn UserSideDeck.size();\n}\n\nint * QueueLinkedList::SideStackPeek() {\n\treturn UserSideDeck.peek();\n}\n\nvoid QueueLinkedList::SideStackPop() {\n\tUserSideDeck.pop();\n}\n\nvoid QueueLinkedList::SideStackInsert(int * x) {\n\tUserSideDeck.push(x);\n}",
		"title": "DS Queue Linked List",
		"description": "DS Queue Linked List",
		"isPublic": false,
		"language": "c++",
		"tags": [

		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "empty = 'empty'\n\ndef is_link(s):\n    \"\"\"s is a linked list if it is empty or a (first, rest) pair.\"\"\"\n    return s == empty or (type(s) == list and len(s) == 2 and is_link(s[1]))\n\ndef link(first, rest=empty):\n    \"\"\"Construct a linked list from its first element and the rest.\"\"\"\n    assert is_link(rest), 'rest must be a linked list.'\n    return [first, rest]\n\ndef first(s):\n    \"\"\"Return the first element of a linked list s.\"\"\"\n    assert is_link(s), 'first only applies to linked lists.'\n    assert s != empty, 'empty linked list has no first element.'\n    return s[0]\n\ndef rest(s):\n    \"\"\"Return the rest of the elements of a linked list s.\"\"\"\n    assert is_link(s), 'rest only applies to linked lists.'\n    assert s != empty, 'empty linked list has no rest.'\n    return s[1]\n\ndef print_link(s):\n    \"\"\"Print elements of a linked list s\"\"\"\n    line = ''\n    while s != empty:\n        if line:\n            line += ' '\n        line += str(first(s))\n        s = rest(s)\n    print(line)\n\ndef reduce_links(s):\n    \"\"\"reduces linked list by values it takes to make a sum of zero\n    \n        >>> r = reduce_links(link(5, link(3, link(-2, link(-1, link(-5, link(2)))))))\n        >>> r\n        [2, 'empty']\n\n        >>> r = reduce_links(link(2, link(-2, link(-1, link(-5, link(2))))))\n        >>> r\n        [-1, [-5, [2, 'empty']]]\n\n        >>> r = reduce_links(link(7,link(2, link(-2, link(-1, link(-5, link(2)))))))\n        >>> r\n        [7, [-1, [-5, [2, 'empty']]]]\n        \n        >>> r = reduce_links(link(7,link(2, link(-10, link(-1, link(-5, link(5)))))))\n        >>> r\n        [7, [2, [-10, [-1, 'empty']]]]\n    \"\"\"\n    x = 0\n    t = s\n    while(True):\n        x+=first(s)\n        s = rest(s)\n        if(x == 0):\n            return s\n        if(s == empty):\n            break\n    return link(first(t),reduce_links(rest(t)))\n\ndef _test():\n    import doctest\n    doctest.testmod(verbose=True)\n\nif __name__ == \"__main__\":\n    _test()\n",
		"title": "Python HW3",
		"description": "HW3",
		"isPublic": false,
		"language": "python",
		"tags": [

		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "#pragma once\n\nusing namespace std;\n\n// Class for Queue\ntemplate <class T>\nclass Queue\n{\nprivate:\n\n\tT *Arr;\n\tint Capacity;\n\tint Head;\n\tint Rear;\n\tint C;\n\npublic:\n\n\tQueue(int s = 10);\t\t// Constructor\n\tT deQueue();\t\t\t// remove head\n\tvoid enQueue(T x);\t\t// add an item\n\tT peek();\t\t\t\t// return head \n\tint size();\t\t\t\t// return the size\n\tbool isEmpty();\t\t\t// check if the Queue is empty or not\n\tbool isFull();\t\t\t// check if the Queue is full or not\n\n\tclass OverFlow {};\n\tclass UnderFlow {};\n\n};\n\ntemplate <class T>\nQueue<T>::Queue(int s)\n{\n\tArr = new T[s];\n\tCapacity = s;\n\tHead = 0;\n\tRear = -1;\n\tC = 0;\n}\n\ntemplate <class T>\nT Queue<T>::deQueue() {\n\n\tif (isEmpty())\n\t\tthrow UnderFlow{};\n\n\tT retVal = peek();\n\tHead = (Head + 1) % Capacity;\n\tC--;\n\n\treturn retVal;\n}\n\ntemplate <class T>\nvoid Queue<T>::enQueue(T item) {\n\n\tif (isFull())\n\t\tthrow OverFlow{};\n\n\tRear = (Rear + 1) % Capacity;\n\tArr[Rear] = item;\n\tC++;\n}\n\ntemplate <class T>\nT Queue<T>::peek() {\n\tif (isEmpty())\n\t\tthrow UnderFlow{};\n\n\treturn Arr[Head];\n}\n\ntemplate <class T>\nint Queue<T>::size() {\n\treturn C;\n}\n\ntemplate <class T>\nbool Queue<T>::isEmpty() {\n\treturn (size() == 0);\n}\n\ntemplate <class T>\nbool Queue<T>::isFull() {\n\treturn (size() == Capacity);\n}",
		"title": "DS Queue",
		"description": "DS Queue",
		"isPublic": false,
		"language": "c++",
		"tags": [

		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "from fractions import Fraction\n\n\"\"\"HW1.py: Write a python program from scratch which reads two integers p and q from a user (or you may modify to use the command line)\nand uses the greedy approach outlined above to output a listing representing a sum of unit fractions, with sum equal to p/q.\"\"\"\n\ndef Greedy_Algorithm(p,q):\n\n    \"\"\"\n    >>> Greedy_Algorithm(3,4)\n    1/2 + 1/4 = 3/4\n    >>> Greedy_Algorithm(11,12)\n    1/2 + 1/3 + 1/12 = 11/12\n\n    \"\"\"\n\n    total = Fraction(p,q)\n    x = 2\n\n    while True:\n        if (total >= Fraction(1,x)):\n            total -= Fraction(1,x)\n            if total == 0:\n                print(\"1/{0} = {1}/{2}\".format(x,p,q))\n                break\n            else:\n                print(\"1/{0} +\".format(x),end = \" \")\n        x+=1\n\n    return \n\n\ndef _test():\n    import doctest\n    doctest.testmod(verbose=True)\n\nif __name__ == \"__main__\":\n\n    _test()\n\n    while True:\n        print(\"Please input two integers, p and q, where p < q.\")\n        print(\"p = \")\n        p = int(input())\n        print(\"q = \")\n        q = int(input())\n        if (p < q):\n            break\n    Greedy_Algorithm(p,q)\n\n    ",
		"title": "Python HW1",
		"description": "HW1",
		"isPublic": false,
		"language": "python",
		"tags": [

		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "#include <iostream>\n\n#pragma once\nusing namespace std;\n\nclass Stack\n{\nprivate:\n\n\tint *UserStack[5];\n\tint Top;\n\tint MaxSize;\n\npublic:\n\n\tStack();\n\tvoid push(int * x);\n\tint * pop();\n\tint * peek();\n\tint size();\n\tbool isEmpty();\n\tbool isFull();\n\tvoid MakeEmpty();\n\n\tclass OverFlow {};\n\tclass UnderFlow {};\n\n};\n\n// Constructor\nStack::Stack() {\n\n\tMaxSize = 5;\n\tTop = -1;\n\n}\n\n// add an element x in the UserStack\nvoid Stack::push(int * x){\n\tif (isFull())\n\t\tthrow OverFlow{};\n\telse\n\t\tUserStack[++Top] = x;\n}\n\n\n// removing Top element from the UserStack\nint * Stack::pop() {\n\tif (isEmpty())\n\t\tthrow UnderFlow{};\n\telse {\n\t\tUserStack[Top] = NULL;\n\t\treturn UserStack[Top--];\n\t}\n}\n\n// return Top element in a Stack\nint * Stack::peek() {\n\tif (!isEmpty())\n\t\treturn UserStack[Top];\n\telse\n\t\tthrow UnderFlow{};\n}\n\n// return size of the Stack\nint Stack::size() {\n\treturn Top + 1;\n}\n\n// test if UserStack is empty\nbool Stack::isEmpty() {\n\treturn Top == -1;\n}\n\n// test if UserStack is full\nbool Stack::isFull() {\n\treturn Top == 4;\n}\n\nvoid Stack::MakeEmpty() {\n\tdelete[] UserStack;\n}",
		"title": "DS Stack.h",
		"description": "DS Stack.h",
		"isPublic": false,
		"language": "c++",
		"tags": [

		],
		"userId": "CodeBaseDev"
	},
	{
		"code": "// A divide and conquer program in C++ to find the smallest distance from a\n// given set of points.\n \n#include <iostream>\n#include <float.h>\n#include <stdlib.h>\n#include <math.h>\nusing namespace std;\n \n// A structure to represent a Point in 2D plane\nstruct Point\n{\n    int x, y;\n};\n \n \n/* Following two functions are needed for library function qsort().\n   Refer: http://www.cplusplus.com/reference/clibrary/cstdlib/qsort/ */\n \n// Needed to sort array of points according to X coordinate\nint compareX(const void* a, const void* b)\n{\n    Point *p1 = (Point *)a,  *p2 = (Point *)b;\n    return (p1->x != p2->x) ? (p1->x - p2->x) : (p1->y - p2->y);\n}\n// Needed to sort array of points according to Y coordinate\nint compareY(const void* a, const void* b)\n{\n    Point *p1 = (Point *)a,   *p2 = (Point *)b;\n    return (p1->y != p2->y) ? (p1->y - p2->y) : (p1->x - p2->x);\n}\n \n// A utility function to find the distance between two points\nfloat dist(Point p1, Point p2)\n{\n    return sqrt( (p1.x - p2.x)*(p1.x - p2.x) +\n                 (p1.y - p2.y)*(p1.y - p2.y)\n               );\n}\n \n// A Brute Force method to return the smallest distance between two points\n// in P[] of size n\nfloat bruteForce(Point P[], int n)\n{\n    float min = FLT_MAX;\n    for (int i = 0; i < n; ++i)\n        for (int j = i+1; j < n; ++j)\n            if (dist(P[i], P[j]) < min)\n                min = dist(P[i], P[j]);\n    return min;\n}\n \n// A utility function to find a minimum of two float values\nfloat min(float x, float y)\n{\n    return (x < y)? x : y;\n}\n \n \n// A utility function to find the distance between the closest points of\n// strip of a given size. All points in strip[] are sorted according to\n// y coordinate. They all have an upper bound on minimum distance as d.\n// Note that this method seems to be a O(n^2) method, but it's a O(n)\n// method as the inner loop runs at most 6 times\nfloat stripClosest(Point strip[], int size, float d)\n{\n    float min = d;  // Initialize the minimum distance as d\n \n    // Pick all points one by one and try the next points till the difference\n    // between y coordinates is smaller than d.\n    // This is a proven fact that this loop runs at most 6 times\n    for (int i = 0; i < size; ++i)\n        for (int j = i+1; j < size && (strip[j].y - strip[i].y) < min; ++j)\n            if (dist(strip[i],strip[j]) < min)\n                min = dist(strip[i], strip[j]);\n \n    return min;\n}\n \n// A recursive function to find the smallest distance. The array Px contains\n// all points sorted according to x coordinates and Py contains all points\n// sorted according to y coordinates\nfloat closestUtil(Point Px[], Point Py[], int n)\n{\n    // If there are 2 or 3 points, then use brute force\n    if (n <= 3)\n        return bruteForce(Px, n);\n \n    // Find the middle point\n    int mid = n/2;\n    Point midPoint = Px[mid];\n \n \n    // Divide points in y sorted array around the vertical line.\n    // Assumption: All x coordinates are distinct.\n    Point Pyl[mid];   // y sorted points on left of vertical line\n    Point Pyr[n-mid];  // y sorted points on right of vertical line\n    int li = 0, ri = 0;  // indexes of left and right subarrays\n    for (int i = 0; i < n; i++)\n    {\n      if ((Py[i].x < midPoint.x || (Py[i].x == midPoint.x && Py[i].y < midPoint.y)) && li<mid)\n         Pyl[li++] = Py[i];\n      else\n         Pyr[ri++] = Py[i];\n    }\n \n    // Consider the vertical line passing through the middle point\n    // calculate the smallest distance dl on left of middle point and\n    // dr on right side\n    float dl = closestUtil(Px, Pyl, mid);\n    float dr = closestUtil(Px + mid, Pyr, n-mid);\n \n    // Find the smaller of two distances\n    float d = min(dl, dr);\n \n    // Build an array strip[] that contains points close (closer than d)\n    // to the line passing through the middle point\n    Point strip[n];\n    int j = 0;\n    for (int i = 0; i < n; i++)\n        if (abs(Py[i].x - midPoint.x) < d)\n            strip[j] = Py[i], j++;\n \n    // Find the closest points in strip.  Return the minimum of d and closest\n    // distance is strip[]\n    return stripClosest(strip, j, d);\n}\n \n// The main function that finds the smallest distance\n// This method mainly uses closestUtil()\nfloat closest(Point P[], int n)\n{\n    Point Px[n];\n    Point Py[n];\n    for (int i = 0; i < n; i++)\n    {\n        Px[i] = P[i];\n        Py[i] = P[i];\n    }\n \n    qsort(Px, n, sizeof(Point), compareX);\n    qsort(Py, n, sizeof(Point), compareY);\n \n    // Use recursive function closestUtil() to find the smallest distance\n    return closestUtil(Px, Py, n);\n}\n \n// Driver program to test above functions\nint main()\n{\n    Point P[] = {{2, 3}, {12, 30}, {40, 50}, {5, 1}, {12, 10}, {3, 4}};\n    int n = sizeof(P) / sizeof(P[0]);\n    cout << \"The smallest distance is \" << closest(P, n);\n    return 0;\n}",
		"id": "b343d31c-4c8c-4c33-8b9a-870338543629",
		"title": "Closest Pair of Points | O(nlogn) Implementation",
		"description": "We are given an array of n points in the plane, and the problem is to find out the closest pair of points in the array. This problem arises in a number of applications. For example, in air-traffic control, you may want to monitor planes that come too close together, since this may indicate a possible collision. Recall the following formula for distance between two points p and q. \n\\left \\| pq\\right \\| = \\sqrt{(p_x - q_x)^2 + (p_y - q_y)^2}  \nWe have discussed a divide and conquer solution for this problem. The time complexity of the implementation provided in the previous post is O(n (Logn)^2). In this post, we discuss implementation with time complexity as O(nLogn). \nFollowing is a recap of the algorithm discussed in the previous post.\n1) We sort all points according to x coordinates.\n2) Divide all points in two halves.\n3) Recursively find the smallest distances in both subarrays.\n4) Take the minimum of two smallest distances. Let the minimum be d. \n5) Create an array strip[] that stores all points which are at most d distance away from the middle line dividing the two sets.\n6) Find the smallest distance in strip[]. \n7) Return the minimum of d and the smallest distance calculated in above step 6.\nThe great thing about the above approach is, if the array strip[] is sorted according to y coordinate, then we can find the smallest distance in strip[] in O(n) time. In the implementation discussed in the previous post, strip[] was explicitly sorted in every recursive call that made the time complexity O(n (Logn)^2), assuming that the sorting step takes O(nLogn) time. \nIn this post, we discuss an implementation where the time complexity is O(nLogn). The idea is to presort all points according to y coordinates. Let the sorted array be Py[]. When we make recursive calls, we need to divide points of Py[] also according to the vertical line. We can do that by simply processing every point and comparing its x coordinate with x coordinate of the middle line.",
		"isPublic": true,
		"language": "c++",
		"tags": [
			"algorithm",
			"c++",
			"class",
			"help",
			"loops"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:03:10.3042814Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "# A Python3 program to find if 2 given line segments intersect or not\n \nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n \n# Given three collinear points p, q, r, the function checks if\n# point q lies on line segment 'pr'\ndef onSegment(p, q, r):\n    if ( (q.x <= max(p.x, r.x)) and (q.x >= min(p.x, r.x)) and\n           (q.y <= max(p.y, r.y)) and (q.y >= min(p.y, r.y))):\n        return True\n    return False\n \ndef orientation(p, q, r):\n    # to find the orientation of an ordered triplet (p,q,r)\n    # function returns the following values:\n    # 0 : Collinear points\n    # 1 : Clockwise points\n    # 2 : Counterclockwise\n     \n    # See https://www.geeksforgeeks.org/orientation-3-ordered-points/amp/\n    # for details of below formula.\n     \n    val = (float(q.y - p.y) * (r.x - q.x)) - (float(q.x - p.x) * (r.y - q.y))\n    if (val > 0):\n         \n        # Clockwise orientation\n        return 1\n    elif (val < 0):\n         \n        # Counterclockwise orientation\n        return 2\n    else:\n         \n        # Collinear orientation\n        return 0\n \n# The main function that returns true if\n# the line segment 'p1q1' and 'p2q2' intersect.\ndef doIntersect(p1,q1,p2,q2):\n     \n    # Find the 4 orientations required for\n    # the general and special cases\n    o1 = orientation(p1, q1, p2)\n    o2 = orientation(p1, q1, q2)\n    o3 = orientation(p2, q2, p1)\n    o4 = orientation(p2, q2, q1)\n \n    # General case\n    if ((o1 != o2) and (o3 != o4)):\n        return True\n \n    # Special Cases\n \n    # p1 , q1 and p2 are collinear and p2 lies on segment p1q1\n    if ((o1 == 0) and onSegment(p1, p2, q1)):\n        return True\n \n    # p1 , q1 and q2 are collinear and q2 lies on segment p1q1\n    if ((o2 == 0) and onSegment(p1, q2, q1)):\n        return True\n \n    # p2 , q2 and p1 are collinear and p1 lies on segment p2q2\n    if ((o3 == 0) and onSegment(p2, p1, q2)):\n        return True\n \n    # p2 , q2 and q1 are collinear and q1 lies on segment p2q2\n    if ((o4 == 0) and onSegment(p2, q1, q2)):\n        return True\n \n    # If none of the cases\n    return False\n \n# Driver program to test above functions:\np1 = Point(1, 1)\nq1 = Point(10, 1)\np2 = Point(1, 2)\nq2 = Point(10, 2)\n \nif doIntersect(p1, q1, p2, q2):\n    print(\"Yes\")\nelse:\n    print(\"No\")\n \np1 = Point(10, 0)\nq1 = Point(0, 10)\np2 = Point(0, 0)\nq2 = Point(10,10)\n \nif doIntersect(p1, q1, p2, q2):\n    print(\"Yes\")\nelse:\n    print(\"No\")\n \np1 = Point(-5,-5)\nq1 = Point(0, 0)\np2 = Point(1, 1)\nq2 = Point(10, 10)\n \nif doIntersect(p1, q1, p2, q2):\n    print(\"Yes\")\nelse:\n    print(\"No\")",
		"id": "3329bfb0-ec3c-40cb-a734-664f10d89da5",
		"title": "How to check if two given line segments intersect?",
		"description": "Given two line segments (p1, q1) and (p2, q2), find if the given line segments intersect with each other.\nBefore we discuss solution, let us define notion of orientation. Orientation of an ordered triplet of points in the plane can be \n–counterclockwise \n–clockwise \n–collinear ",
		"isPublic": true,
		"language": "python",
		"tags": [
			"algorithm",
			"class",
			"function",
			"help",
			"python",
			"python-3.x",
			"python2.7"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:06:23.1901275Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "#include <iostream>\nusing namespace std;\n \n// Define Infinite (Using INT_MAX caused overflow problems)\n#define INF 10000\n \nstruct Point\n{\n    int x;\n    int y;\n};\n \n// Given three collinear points p, q, r, the function checks if\n// point q lies on line segment 'pr'\nbool onSegment(Point p, Point q, Point r)\n{\n    if (q.x <= max(p.x, r.x) && q.x >= min(p.x, r.x) &&\n            q.y <= max(p.y, r.y) && q.y >= min(p.y, r.y))\n        return true;\n    return false;\n}\n \n// To find orientation of ordered triplet (p, q, r).\n// The function returns following values\n// 0 --> p, q and r are collinear\n// 1 --> Clockwise\n// 2 --> Counterclockwise\nint orientation(Point p, Point q, Point r)\n{\n    int val = (q.y - p.y) * (r.x - q.x) -\n            (q.x - p.x) * (r.y - q.y);\n \n    if (val == 0) return 0; // collinear\n    return (val > 0)? 1: 2; // clock or counterclock wise\n}\n \n// The function that returns true if line segment 'p1q1'\n// and 'p2q2' intersect.\nbool doIntersect(Point p1, Point q1, Point p2, Point q2)\n{\n    // Find the four orientations needed for general and\n    // special cases\n    int o1 = orientation(p1, q1, p2);\n    int o2 = orientation(p1, q1, q2);\n    int o3 = orientation(p2, q2, p1);\n    int o4 = orientation(p2, q2, q1);\n \n    // General case\n    if (o1 != o2 && o3 != o4)\n        return true;\n \n    // Special Cases\n    // p1, q1 and p2 are collinear and p2 lies on segment p1q1\n    if (o1 == 0 && onSegment(p1, p2, q1)) return true;\n \n    // p1, q1 and p2 are collinear and q2 lies on segment p1q1\n    if (o2 == 0 && onSegment(p1, q2, q1)) return true;\n \n    // p2, q2 and p1 are collinear and p1 lies on segment p2q2\n    if (o3 == 0 && onSegment(p2, p1, q2)) return true;\n \n    // p2, q2 and q1 are collinear and q1 lies on segment p2q2\n    if (o4 == 0 && onSegment(p2, q1, q2)) return true;\n \n    return false; // Doesn't fall in any of the above cases\n}\n \n// Returns true if the point p lies inside the polygon[] with n vertices\nbool isInside(Point polygon[], int n, Point p)\n{\n    // There must be at least 3 vertices in polygon[]\n    if (n < 3) return false;\n \n    // Create a point for line segment from p to infinite\n    Point extreme = {INF, p.y};\n \n    // Count intersections of the above line with sides of polygon\n    int count = 0, i = 0;\n    do\n    {\n        int next = (i+1)%n;\n \n        // Check if the line segment from 'p' to 'extreme' intersects\n        // with the line segment from 'polygon[i]' to 'polygon[next]'\n        if (doIntersect(polygon[i], polygon[next], p, extreme))\n        {\n            // If the point 'p' is collinear with line segment 'i-next',\n            // then check if it lies on segment. If it lies, return true,\n            // otherwise false\n            if (orientation(polygon[i], p, polygon[next]) == 0)\n            return onSegment(polygon[i], p, polygon[next]);\n \n            count++;\n        }\n        i = next;\n    } while (i != 0);\n \n    // Return true if count is odd, false otherwise\n    return count&1; // Same as (count%2 == 1)\n}\n \n// Driver program to test above functions\nint main()\n{\n    Point polygon1[] = {{0, 0}, {10, 0}, {10, 10}, {0, 10}};\n    int n = sizeof(polygon1)/sizeof(polygon1[0]);\n    Point p = {20, 20};\n    isInside(polygon1, n, p)? cout << \"Yes \\n\": cout << \"No \\n\";\n \n    p = {5, 5};\n    isInside(polygon1, n, p)? cout << \"Yes \\n\": cout << \"No \\n\";\n \n    Point polygon2[] = {{0, 0}, {5, 5}, {5, 0}};\n    p = {3, 3};\n    n = sizeof(polygon2)/sizeof(polygon2[0]);\n    isInside(polygon2, n, p)? cout << \"Yes \\n\": cout << \"No \\n\";\n \n    p = {5, 1};\n    isInside(polygon2, n, p)? cout << \"Yes \\n\": cout << \"No \\n\";\n \n    p = {8, 1};\n    isInside(polygon2, n, p)? cout << \"Yes \\n\": cout << \"No \\n\";\n \n    Point polygon3[] = {{0, 0}, {10, 0}, {10, 10}, {0, 10}};\n    p = {-1,10};\n    n = sizeof(polygon3)/sizeof(polygon3[0]);\n    isInside(polygon3, n, p)? cout << \"Yes \\n\": cout << \"No \\n\";\n \n    return 0;\n}",
		"id": "e6cc4609-b659-48fe-b479-12be1b8232ac",
		"title": "How to check if a given point lies inside or outside a polygon?",
		"description": "1) Draw a horizontal line to the right of each point and extend it to infinity\n\n1) Count the number of times the line intersects with polygon edges.\n\n2) A point is inside the polygon if either count of intersections is odd or\n   point lies on an edge of polygon.  If none of the conditions is true, then \n   point lies outside.",
		"isPublic": true,
		"language": "c++",
		"tags": [
			"algorithm",
			"c++",
			"class",
			"help",
			"loops"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:07:52.6190211Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "using System;\nusing System.Collections.Generic;\n     \npublic class Point\n{\n    public int x, y;\n    public Point(int x, int y)\n    {\n        this.x = x;\n        this.y = y;\n    }\n}\n \npublic class GFG\n{\n     \n    // To find orientation of ordered triplet (p, q, r).\n    // The function returns following values\n    // 0 --> p, q and r are collinear\n    // 1 --> Clockwise\n    // 2 --> Counterclockwise\n    public static int orientation(Point p, Point q, Point r)\n    {\n        int val = (q.y - p.y) * (r.x - q.x) -\n                (q.x - p.x) * (r.y - q.y);\n     \n        if (val == 0) return 0; // collinear\n        return (val > 0)? 1: 2; // clock or counterclock wise\n    }\n     \n    // Prints convex hull of a set of n points.\n    public static void convexHull(Point []points, int n)\n    {\n        // There must be at least 3 points\n        if (n < 3) return;\n     \n        // Initialize Result\n        List<Point> hull = new List<Point>();\n     \n        // Find the leftmost point\n        int l = 0;\n        for (int i = 1; i < n; i++)\n            if (points[i].x < points[l].x)\n                l = i;\n     \n        // Start from leftmost point, keep moving\n        // counterclockwise until reach the start point\n        // again. This loop runs O(h) times where h is\n        // number of points in result or output.\n        int p = l, q;\n        do\n        {\n            // Add current point to result\n            hull.Add(points[p]);\n     \n            // Search for a point 'q' such that\n            // orientation(p, q, x) is counterclockwise\n            // for all points 'x'. The idea is to keep\n            // track of last visited most counterclock-\n            // wise point in q. If any point 'i' is more\n            // counterclock-wise than q, then update q.\n            q = (p + 1) % n;\n             \n            for (int i = 0; i < n; i++)\n            {\n            // If i is more counterclockwise than\n            // current q, then update q\n            if (orientation(points[p], points[i], points[q])\n                                                == 2)\n                q = i;\n            }\n     \n            // Now q is the most counterclockwise with\n            // respect to p. Set p as q for next iteration,\n            // so that q is added to result 'hull'\n            p = q;\n     \n        } while (p != l); // While we don't come to first\n                        // point\n     \n        // Print Result\n        foreach (Point temp in hull)\n            Console.WriteLine(\"(\" + temp.x + \", \" +\n                                temp.y + \")\");\n    }\n     \n    /* Driver code */\n    public static void Main(String[] args)\n    {\n \n        Point []points = new Point[7];\n        points[0]=new Point(0, 3);\n        points[1]=new Point(2, 3);\n        points[2]=new Point(1, 1);\n        points[3]=new Point(2, 1);\n        points[4]=new Point(3, 0);\n        points[5]=new Point(0, 0);\n        points[6]=new Point(3, 3);\n         \n        int n = points.Length;\n        convexHull(points, n);\n         \n    }\n}",
		"id": "bb7b066c-c85d-4f64-b09a-58d2ca501371",
		"title": "Convex Hull | Set 1 (Jarvis’s Algorithm or Wrapping)",
		"description": "Given a set of points in the plane. the convex hull of the set is the smallest convex polygon that contains all the points of it.",
		"isPublic": true,
		"language": "c#",
		"tags": [
			".net",
			"c#",
			"for-loop",
			"git",
			"help",
			"list",
			"multithreading"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:09:46.8261064Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "#include <bits/stdc++.h>\nusing namespace std;\n \n// A point in 2D plane\nstruct Point\n{\n    int x, y;\n};\n \n// A line segment with left as Point\n// with smaller x value and right with\n// larger x value.\nstruct Segment\n{\n    Point left, right;\n};\n \n \n// An event for sweep line algorithm\n// An event has a point, the position\n// of point (whether left or right) and\n// index of point in the original input\n// array of segments.\nstruct Event {\n    int x, y;\n    bool isLeft;\n    int index;\n    Event(int x, int y, bool l, int i) : x(x), y(y), isLeft(l), index(i) {}\n \n    // This is for maintaining the order in set.\n    bool operator<(const Event& e) const {\n            if(y==e.y)return x<e.x;\n            return y < e.y;\n    }\n};\n \n \n// Given three collinear points p, q, r, the function checks if\n// point q lies on line segment 'pr'\nbool onSegment(Point p, Point q, Point r)\n{\n    if (q.x <= max(p.x, r.x) && q.x >= min(p.x, r.x) &&\n        q.y <= max(p.y, r.y) && q.y >= min(p.y, r.y))\n       return true;\n \n    return false;\n}\n \n// To find orientation of ordered triplet (p, q, r).\n// The function returns following values\n// 0 --> p, q and r are collinear\n// 1 --> Clockwise\n// 2 --> Counterclockwise\nint orientation(Point p, Point q, Point r)\n{\n    // See https://www.geeksforgeeks.org/orientation-3-ordered-points/\n    // for details of below formula.\n    int val = (q.y - p.y) * (r.x - q.x) -\n              (q.x - p.x) * (r.y - q.y);\n \n    if (val == 0) return 0;  // collinear\n \n    return (val > 0)? 1: 2; // clock or counterclock wise\n}\n \n// The main function that returns true if line segment 'p1q1'\n// and 'p2q2' intersect.\nbool doIntersect(Segment s1, Segment s2)\n{\n    Point p1 = s1.left, q1 = s1.right, p2 = s2.left, q2 = s2.right;\n \n    // Find the four orientations needed for general and\n    // special cases\n    int o1 = orientation(p1, q1, p2);\n    int o2 = orientation(p1, q1, q2);\n    int o3 = orientation(p2, q2, p1);\n    int o4 = orientation(p2, q2, q1);\n \n    // General case\n    if (o1 != o2 && o3 != o4)\n        return true;\n \n    // Special Cases\n    // p1, q1 and p2 are collinear and p2 lies on segment p1q1\n    if (o1 == 0 && onSegment(p1, p2, q1)) return true;\n \n    // p1, q1 and q2 are collinear and q2 lies on segment p1q1\n    if (o2 == 0 && onSegment(p1, q2, q1)) return true;\n \n    // p2, q2 and p1 are collinear and p1 lies on segment p2q2\n    if (o3 == 0 && onSegment(p2, p1, q2)) return true;\n \n     // p2, q2 and q1 are collinear and q1 lies on segment p2q2\n    if (o4 == 0 && onSegment(p2, q1, q2)) return true;\n \n    return false; // Doesn't fall in any of the above cases\n}\n \n \n// Find predecessor of iterator in s.\n set<Event>::iterator pred(set<Event> &s, set<Event>::iterator it) {\n    return it == s.begin() ? s.end() : --it;\n}\n \n// Find successor of iterator in s.\nset<Event>::iterator succ(set<Event> &s, set<Event>::iterator it) {\n    return ++it;\n}\n \n// Returns true if any two lines intersect.\nint isIntersect(Segment arr[], int n)\n{\n    unordered_map<string,int> mp;  // to note the pair for which intersection is checked already\n    // Pushing all points to a vector of events\n    vector<Event> e;\n    for (int i = 0; i < n; ++i) {\n        e.push_back(Event(arr[i].left.x, arr[i].left.y, true, i));\n        e.push_back(Event(arr[i].right.x, arr[i].right.y, false, i));\n    }\n \n    // Sorting all events according to x coordinate.\n    sort(e.begin(), e.end(), [](Event &e1, Event &e2) {return e1.x < e2.x;});\n \n    // For storing active segments.\n    set<Event> s;\n     int ans=0;\n    // Traversing through sorted points\n    for (int i=0; i<2*n; i++)\n    {\n        Event curr = e[i];\n        int index = curr.index;\n \n        // If current point is left of its segment\n        if (curr.isLeft)\n        {\n            // Get above and below points\n            auto next = s.lower_bound(curr);\n            auto prev = pred(s, next);\n            // Check if current point intersects with\n            // any of its adjacent\n            bool flag=false;\n            if (next != s.end() && doIntersect(arr[next->index], arr[index])){\n                string s=to_string(next->index+1)+\" \"+to_string(index+1);\n                if(mp.count(s)==0){mp[s]++;ans++;} //if not already checked we can increase count in map\n            }\n            if (prev != s.end() && doIntersect(arr[prev->index], arr[index])){\n                    string s=to_string(prev->index+1)+\" \"+to_string(index+1);\n                if(mp.count(s)==0){mp[s]++;ans++;} //if not already checked we can increase count in map\n            }\n            // if same line segment is there then decrease answer as it got increased twice\n            if(prev != s.end() && next != s.end() && next->index==prev->index)ans--;\n \n \n            // Insert current point (or event)\n            s.insert(curr);\n        }\n \n        // If current point is right of its segment\n        else\n        {\n            // Find the iterator\n            auto it=s.find(Event(arr[index].left.x, arr[index].left.y, true, index));\n            // Find above and below points\n            auto next = succ(s, it);\n            auto prev = pred(s, it);\n \n            // If above and below point intersect\n            if (next != s.end() && prev != s.end())\n               {  string s=to_string(next->index+1)+\" \"+to_string(prev->index+1);\n                    string s1=to_string(prev->index+1)+\" \"+to_string(next->index+1);\n                   if (mp.count(s)==0&&mp.count(s1)==0&&doIntersect(arr[prev->index], arr[next->index]))\n                    ans++;\n                    mp[s]++;\n                  }\n \n            // Remove current segment\n            s.erase(it);\n \n        }\n    }\n    //print pair of lines having intersection\n \n    for(auto &pr:mp){\n        cout<<pr.first<<\"\\n\";\n    }\n    return ans;\n}\n \n// Driver code\nint main() {\n    Segment arr[] = { {{1, 5}, {4, 5}}, {{2, 5}, {10, 1}},{{3, 2}, {10, 3}},{{6, 4}, {9, 4}},{{7, 1}, {8, 1}}};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    cout<<isIntersect(arr, n);\n    return 0;\n}",
		"id": "5f48d1a9-79a7-406a-9eac-8514042ddddd",
		"title": "Given n line segments, find if any two segments intersect",
		"description": "PseudoCode: \nThe following pseudocode doesn’t use heap. It simply sort the array. \n \n\nsweepLineIntersection(Points[0..2n-1]):\n1. Sort Points[] from left to right (according to x coordinate)\n\n2. Create an empty Self-Balancing BST T. It will contain \n  all active line Segments ordered by y coordinate.\n\n// Process all 2n points \n3. for i = 0 to 2n-1\n\n    // If this point is left end of its line  \n    if (Points[i].isLeft) \n       T.insert(Points[i].line())  // Insert into the tree\n\n       // Check if this points intersects with its predecessor and successor\n       if ( doIntersect(Points[i].line(), T.pred(Points[i].line()) )\n         return true\n       if ( doIntersect(Points[i].line(), T.succ(Points[i].line()) )\n         return true\n\n    else  // If it's a right end of its line\n       // Check if its predecessor and successor intersect with each other\n       if ( doIntersect(T.pred(Points[i].line(), T.succ(Points[i].line()))\n         return true\n       T.delete(Points[i].line())  // Delete from tree\n\n4. return False",
		"isPublic": true,
		"language": "c++",
		"tags": [
			"c++",
			"class",
			"dataframe",
			"dictionary",
			"datetime",
			"date",
			"entity-framework",
			"file",
			"google-maps"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:11:24.5082433Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "<script>\n \n// javascript program to generate odd sized magic squares\n   // Function to generate odd sized magic squares\n \nfunction generateSquare(n)\n{\n    magicSquare = Array(n).fill(0).map(x => Array(n).fill(0));\n \n    // Initialize position for 1\n    var i = parseInt(n / 2);\n    var j = n - 1;\n \n    // One by one put all values in magic square\n    for (num = 1; num <= n * n;) {\n        if (i == -1 && j == n) // 3rd condition\n        {\n            j = n - 2;\n            i = 0;\n        }\n        else {\n            // 1st condition helper if next number\n            // goes to out of square's right side\n            if (j == n)\n                j = 0;\n \n            // 1st condition helper if next number is\n            // goes to out of square's upper side\n            if (i < 0)\n                i = n - 1;\n        }\n \n        // 2nd condition\n        if (magicSquare[i][j] != 0) {\n            j -= 2;\n            i++;\n            continue;\n        }\n        else\n            // set number\n            magicSquare[i][j] = num++;\n \n        // 1st condition\n        j++;\n        i--;\n    }\n \n    // print magic square\n    document.write(\"The Magic Square for \" + n\n                       + \":<br>\");\n    document.write(\"Sum of each row or column \"\n                       + parseInt(n * (n * n + 1) / 2) + \":<br>\");\n    for (i = 0; i < n; i++) {\n        for (j = 0; j < n; j++)\n            document.write(magicSquare[i][j] + \" \");\n        document.write(\"<br>\");\n    }\n}\n \n// driver program\n // Works only when n is odd\nvar n = 7;\ngenerateSquare(n);\n \n</script>",
		"id": "58862abe-5996-48d5-b007-9252b3c8b640",
		"title": "Magic Square | ODD Order",
		"description": "A magic square of order n is an arrangement of n2 numbers, usually distinct integers, in a square, such that the n numbers in all rows, all columns, and both diagonals sum to the same constant. A magic square contains the integers from 1 to n2. \nThe constant sum in every row, column and diagonal are called the magic constant or magic sum, M. The magic constant of a normal magic square depends only on n and has the following value: \nM = n(n2+1)/2\n\nFor normal magic squares of order n = 3, 4, 5, ...,\nthe magic constants are: 15, 34, 65, 111, 175, 260, ... \nIn this post, we will discuss how programmatically we can generate a magic square of size n. This approach only takes into account odd values of n and doesn’t work for even numbers. Before we go further, consider the below examples:\n\nMagic Square of size 3\n-----------------------\n  2   7   6\n  9   5   1\n  4   3   8\nSum in each row & each column = 3*(32+1)/2 = 15\n\n\nMagic Square of size 5\n----------------------\n  9   3  22  16  15\n  2  21  20  14   8\n 25  19  13   7   1\n 18  12   6   5  24\n 11  10   4  23  17\nSum in each row & each column = 5*(52+1)/2 = 65\n\n\nMagic Square of size 7\n----------------------\n 20  12   4  45  37  29  28\n 11   3  44  36  35  27  19\n  2  43  42  34  26  18  10\n 49  41  33  25  17   9   1\n 40  32  24  16   8   7  48\n 31  23  15  14   6  47  39\n 22  21  13   5  46  38  30\nSum in each row & each column = 7*(72+1)/2 = 175\nDid you find any pattern in which the numbers are stored? \n\nIn any magic square, the first number i.e. 1 is stored at position (n/2, n-1). Let this position be (i,j). The next number is stored at position (i-1, j+1) where we can consider each row & column as circular array i.e. they wrap around.\n\nThree conditions hold:\n1. The position of next number is calculated by decrementing row number of the previous number by 1, and incrementing the column number of the previous number by 1. At any time, if the calculated row position becomes -1, it will wrap around to n-1. Similarly, if the calculated column position becomes n, it will wrap around to 0.\n2. If the magic square already contains a number at the calculated position, calculated column position will be decremented by 2, and calculated row position will be incremented by 1.\n3. If the calculated row position is -1 & calculated column position is n, the new position would be: (0, n-2). \n\nExample:\nMagic Square of size 3\n----------------------\n 2  7  6\n 9  5  1\n 4  3  8 \n\nSteps:\n1. position of number 1 = (3/2, 3-1) = (1, 2)\n2. position of number 2 = (1-1, 2+1) = (0, 0)\n3. position of number 3 = (0-1, 0+1) = (3-1, 1) = (2, 1)\n4. position of number 4 = (2-1, 1+1) = (1, 2)\n   Since, at this position, 1 is there. So, apply condition 2.\n   new position=(1+1,2-2)=(2,0)\n5. position of number 5=(2-1,0+1)=(1,1)\n6. position of number 6=(1-1,1+1)=(0,2)\n7. position of number 7 = (0-1, 2+1) = (-1,3) // this is tricky, see condition 3 \n   new position = (0, 3-2) = (0,1)\n8. position of number 8=(0-1,1+1)=(-1,2)=(2,2) //wrap around\n9. position of number 9=(2-1,2+1)=(1,3)=(1,0) //wrap around",
		"isPublic": true,
		"language": "javascript",
		"tags": [
			"algorithm",
			"function",
			"json",
			"javascript"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:14:11.8978535Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "//Fibonacci Series using Recursion\nclass fibonacci\n{\n    static int fib(int n)\n    {\n    if (n <= 1)\n       return n;\n    return fib(n-1) + fib(n-2);\n    }\n      \n    public static void main (String args[])\n    {\n    int n = 9;\n    System.out.println(fib(n));\n    }\n}",
		"id": "5c01ffbe-4bd3-417b-bac6-8b4e0d9c84b0",
		"title": "Program for Fibonacci numbers",
		"description": "The Fibonacci numbers are the numbers in the following integer sequence.\n0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..\n\nIn mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation \n\nFn = Fn-1 + Fn-2\nwith seed values \n\nF0 = 0 and F1 = 1.",
		"isPublic": true,
		"language": "java",
		"tags": [
			"java",
			"r",
			"recursive"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:17:37.5645577Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "// A Program to check whether a number is divisible by 7\n#include <stdio.h>\n \nint isDivisibleBy7( int num )\n{\n    // If number is negative, make it positive\n    if( num < 0 )\n        return isDivisibleBy7( -num );\n \n    // Base cases\n    if( num == 0 || num == 7 )\n        return 1;\n    if( num < 10 )\n        return 0;\n \n    // Recur for ( num / 10 - 2 * num % 10 )\n    return isDivisibleBy7( num / 10 - 2 * ( num - num / 10 * 10 ) );\n}\n \n// Driver program to test above function\nint main()\n{\n    int num = 616;\n    if( isDivisibleBy7(num ) )\n        printf( \"Divisible\" );\n    else\n        printf( \"Not Divisible\" );\n    return 0;\n}",
		"id": "b0d9b13d-ea22-425e-8edf-b24baf8ac648",
		"title": "Check divisibility by 7",
		"description": "Given a number, check if it is divisible by 7. You are not allowed to use modulo operator, floating point arithmetic is also not allowed. \nA simple method is repeated subtraction. Following is another interesting method.\nDivisibility by 7 can be checked by a recursive method. A number of the form 10a + b is divisible by 7 if and only if a – 2b is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a small number. \nExample: the number 371: 37 – (2×1) = 37 – 2 = 35; 3 – (2 × 5) = 3 – 10 = -7; thus, since -7 is divisible by 7, 371 is divisible by 7. ",
		"isPublic": true,
		"language": "c",
		"tags": [
			"c",
			"algorithm"
		],
		"voteCount": 0,
		"userId": "EampleUserThree",
		"creationDate": "2022-03-21T20:19:12.82115Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "// Java code for Pascal's Triangle\nimport java.io.*;\n \nclass GFG {\n     \n    // Function to print first\n    // n lines of Pascal's Triangle\n    static void printPascal(int n)\n    {\n         \n    // Iterate through every line\n    // and print entries in it\n    for (int line = 0; line < n; line++)\n    {\n        // Every line has number of\n        // integers equal to line number\n        for (int i = 0; i <= line; i++)\n        System.out.print(binomialCoeff\n                        (line, i)+\" \");\n                         \n        System.out.println();\n    }\n    }\n     \n    // Link for details of this function\n    // https://www.geeksforgeeks.org/space-and-time-efficient-binomial-coefficient/\n    static int binomialCoeff(int n, int k)\n    {\n        int res = 1;\n         \n        if (k > n - k)\n        k = n - k;\n             \n        for (int i = 0; i < k; ++i)\n        {\n            res *= (n - i);\n            res /= (i + 1);\n        }\n        return res;\n    }\n     \n    // Driver code\n    public static void main(String args[])\n    {\n    int n = 7;\n    printPascal(n);\n    }\n}",
		"id": "2ef03af6-a9ba-4afa-befa-c93ca97ae4da",
		"title": "Pascal’s Triangle",
		"description": "Pascal’s triangle is a triangular array of the binomial coefficients. Write a function that takes an integer value n as input and prints first n lines of the Pascal’s triangle. Following are the first 6 rows of Pascal’s Triangle.\n \n\n1  \n1 1 \n1 2 1 \n1 3 3 1 \n1 4 6 4 1 \n1 5 10 10 5 1 ",
		"isPublic": true,
		"language": "java",
		"tags": [
			"algorithm",
			"class",
			"express",
			"insertion"
		],
		"voteCount": 0,
		"userId": "EampleUserFour",
		"creationDate": "2022-03-21T20:20:31.2299736Z",
		"comments": [

		],
		"votes": [

		]
	},
	{
		"code": "// C Efficient program to calculate\n// e raise to the power x\n#include <stdio.h>\n \n// Returns approximate value of e^x\n// using sum of first n terms of Taylor Series\nfloat exponential(int n, float x)\n{\n    float sum = 1.0f; // initialize sum of series\n \n    for (int i = n - 1; i > 0; --i )\n        sum = 1 + x * sum / i;\n \n    return sum;\n}\n \n// Driver program to test above function\nint main()\n{\n    int n = 10;\n    float x = 1.0f;\n    printf(\"e^x = %f\", exponential(n, x));\n    return 0;\n}",
		"id": "24ad83c4-d13c-4cc5-9894-503ded8df809",
		"title": "Efficient program to calculate e^x",
		"description": "The value of Exponential Function e^x can be expressed using following Taylor Series.\n\ne^x = 1 + x/1! + x^2/2! + x^3/3! + ...... \nHow to efficiently calculate the sum of above series? \nThe series can be re-written as \n \n\ne^x = 1 + (x/1) (1 + (x/2) (1 + (x/3) (........) ) ) \nLet the sum needs to be calculated for n terms, we can calculate sum using following loop.\n\nfor (i = n - 1, sum = 1; i > 0; --i )\n    sum = 1 + x * sum / i; ",
		"isPublic": true,
		"language": "c",
		"tags": [

		],
		"voteCount": 0,
		"userId": "EampleUserFour",
		"creationDate": "2022-03-21T20:21:42.8621651Z",
		"comments": [

		],
		"votes": [

		]
	}
];

_.forEach(data, (s) => {
	setTimeout(() => {
		$.ajax({
			url: document.location.origin + "/codebase/createCodeblock",
			contentType: "application/json; charset=utf-8",
			type: "POST",
			data: JSON.stringify({
				"userId": s.userId,
				"title": s.title,
				"isPublic": s.isPublic,
				"language": s.language,
				"description": s.description,
				"tags": s.tags,
				"code": s.code
			})
		});
	}, 2000);
});

/* Break */

var newData = [];

$.ajax({
	url: document.location.origin + "/codebase/searchCodeblocks",
	contentType: "application/json; charset=utf-8",
	data: JSON.stringify({
		search: search,
		filters: {
			isPublic: "true"
		}
	}),
	type: "POST",
	success: function (data) {
		newData = data.codeblocks

	},
	error: function (error) {
		console.log(error);
	}
});

/* Break */

_.forEach(newData, (s) => {
	var ran = Math.random() * (100 - 1) + 1;
	for (var i = 0; i < ran; i++) {
		$.ajax({
			url: document.location.origin + "/codebase/" + s.id + "/upVote",
			type: "POST",

		});
	}
});

/* Break */

var comments = [
	"Vitula biviella is a species of snout moth in the genus Vitula. It was described by Zeller in 1848. It is found in most of Europe, except Ireland and the southern part of the Balkan Peninsula.[2] It is only recently present in Great Britain. The first records were noted in 1997 and 1998 from Kent and the species now seems to have established small breeding populations in both Kent and Suffolk.[3]",
	"Grant Bond was born and raised in Kansas City, Kansas. His love for art was a predominate fixture in his youth and early adult life due to the support and influence of his grandmother. He studied under Russian painter Sergei Davydov (artist) for many years. Bond has credited comic creator Ande Parks for personally sparking an early interest in creating comics. He left the creative world behind to successfully manage a business for most of the 1990s. In late 2006 he returned to comics with his first book Revere: Revolution in Silver originally published with Alias Enterprises. As a relative newcomer to comics, Bond's animation-influenced art style has already amassed a heavy fan base.",
	"Dihydrothiepine may refer to several isomeric chemical compounds",
	"Casas de Pedro Barba, or simply Pedro Barba, is a small community of summer residences on the island of La Graciosa, Canary Islands, Spain. Its population, as of 1 January 2018 and according to the Spanish Statistical Institute, is of 3 inhabitants.[1] It is part of the municipality of Teguise on the neighbouring island of Lanzarote. There are no asphalted roads on La Graciosa; a dirt track connects the settlement to the only other inhabited town on the island, Caleta de Sebo, from which a regular ferry service is offered to Lanzarote.",
	"Rosenergoatom (Russian: Росэнергоатом) is the Russian nuclear power station operations subsidiary of Atomenergoprom.",
	"Bariarpur (Hindi: बरियारपुर) is a village in Munger district in Bihar state of India.",
	"The Château d'Ivry-la-Bataille is a ruinous Norman castle in the town of Ivry-la-Bataille in the Normandy region. It is among the earliest examples of a stone donjon or keep, which would become a common feature of later Norman castles in various parts of Europe.",
	"Notocetus is an extinct genus of river dolphin belonging to Squalodelphinidae. Known specimens have been found in Early Miocene marine deposits from Argentina, Italy and Peru.",
	"Salto is a barrio in the municipality of Cidra, Puerto Rico. Its population in 2010 was 176.",
	"Asparagus asparagoides, commonly known as bridal creeper, bridal-veil creeper, gnarboola, smilax or smilax asparagus, is a herbaceous climbing plant of the family Asparagaceae native to eastern and southern Africa. Sometimes grown as an ornamental plant, it has become a serious environmental weed in Australia and New Zealand.",
	"Chuuk High School (CHS), formerly Truk High School, is a secondary school in Weno, Chuuk Lagoon, Chuuk State, Federated States of Micronesia. It is a part of the Chuuk State Department of Education.",
	"The Burloak Canoe Club is a flatwater canoe/kayak racing club located in Oakville, Ontario. It serves the communities of Burlington and Oakville and provides a variety of canoe-based activities for local residents focusing primarily on the two disciplines of sprint canoe and sprint kayak. Burloak Canoe Club is located on Navy Flats along the banks of Sixteen Mile Creek[1] and boasts a sizable building that caters not only to sport but to special events as well.",
	"The Indian cricket team played one One Day International against Scotland between the conclusion of the Test Series and the beginning of the ODI series against England on August 16, 2007. In what was the first ODI between the two sides, India won the rain-affected match by seven wickets.",
	"Allan Sydney Lewis (born December 12, 1941) is a Panamanian former professional baseball player. He was an outfielder and pinch runner over parts of 6 seasons (1967–1973) with the Kansas City/Oakland Athletics. Lewis was a member of the 1972 and 1973 World Series champion Athletics. For his career he batted .207 with 1 home run and 44 stolen bases in 156 games. Lewis is one of only seven players with more career game appearances than plate appearances.",
	"Corey Schueneman (born September 2, 1995) is an American professional ice hockey defenseman currently playing for the Montreal Canadiens of the National Hockey League (NHL).",
	"The Monterey Bay Aquarium Research Institute (MBARI) is a private, non-profit oceanographic research center in Moss Landing, California. MBARI was founded in 1987 by David Packard, and is primarily funded by the David and Lucile Packard Foundation. Christopher Scholin serves as the institute's president and chief executive officer, managing a work force of approximately 220 scientists, engineers, and operations and administrative staff.",
	"The team jumping competition at the 2006 FEI World Equestrian Games was held between August 29 and August 31, 2006.",
	"Parivartan (Transformation) is a grass-roots activism organisation based in the Sundar Nagari area of New Delhi, India.[1] During the 2000s, Parivartan used Right to Information (RTI) to address citizens' grievances related to Public Distribution System (PDS), public works, social welfare schemes, income tax and electricity.",
	"A protoconch (meaning first or earliest or original shell) is an embryonic or larval shell which occurs in some classes of molluscs, e.g., the initial chamber of an ammonite or the larval shell of a gastropod. In older texts it is also called "nucleus". The protoconch may sometimes consist of several whorls, but when this is the case, the whorls show no growth lines.",
	"Mercedes Vecino Francés (4 February 1916 – 28 August 2004) was a Spanish film actress. She was famous as the woman who gave the first kiss in Spanish cinema."
];

var users = ["CodeBaseDev", "EampleUserOne", "EampleUserTwo", "ExampleUserThree", "ExampleUserFour"];

_.forEach(newData, (s) => {
	var ran = Math.random() * (5 - 1) + 1;
	for (var i = 0; i < ran; i++) {
		var rand = Math.random() * (19 - 0) + 0;
		var randi = Math.random() * (4 - 0) + 0;

		$.ajax({
			url: document.location.origin + "/codebase/" + s.id + "/createComment",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify({
				"userId": users[randi],
				"comment": comments[rand]
			}),
			type: "POST"
		});
	}

});