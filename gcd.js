function gcd(m, n){
    if(!n)return m;
    return gcd(n, m % n);
}
