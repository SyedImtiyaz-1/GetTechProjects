#include <bits/stdc++.h>
using namespace std;
#define endl "\n"

#define mod 1000000007
#define PI 3.141592653589793238462643383279
#define all(v) (v).begin(), (v).end()
#define rall(v) (v).rbegin(), (v).rend()
#define trace(x) cerr << #x << " : " << x << endl;
#define pb push_back
const int e = 1 << 30;
const int k = 1e6 + 1;
 
void solve()
{
   
}
int32_t main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int t = 1;
    cin >> t;
    while (t--)
    {
       long long int a,b;
       cin>>a>>b;
       if(b%a==0)
       {
        cout<<(b*(b/a))<<endl;
       }
      else if(__gcd(a,b)!=1)
       {
        cout<<(b*a)/__gcd(a,b)<<endl;
       }
       else{
cout<<a*b<<endl;
       }
    }
 
    return 0;
}