char* itoa(int n) {
    char* ret = NULL;
    int numChars = 0;
    // Determine if integer is negative
    bool isNegative = false;
    if (n < 0) {
        n = -n;
        isNegative = true;
        numChars++;
    }
    // Count how much space we will need for the string
    int temp = n;
    do {
        numChars++;
        temp /= 10;
    } while ( temp );
    //Allocate space for the string (1 for negative sign, 1 for each digit, and 1 for null terminator)
    ret = new char[ numChars + 1 ];
    ret[numChars] = 0;
    //Add the negative sign if needed
    if (isNegative) ret[0] = '-';
    // Copy digits to string in reverse order
    int i = numChars - 1;
    do {
        ret[i--] = n%10 + '0';
        n /= 10;
    } while (n);
    return ret;
}
