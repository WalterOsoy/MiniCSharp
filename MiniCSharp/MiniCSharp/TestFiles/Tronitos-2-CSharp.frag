class Parser : analyzer, lexical, syntactical {
    int a1;
    int f1(int a, int b, int c) {
        { if (a<b) p1=2; else p1=3; }
        return (p1) ;
    }
    void proc1(double y) {
        // empty void
    }
}


class Program {
    void main(string x){
        int m1;
        const int m2;
        int m3;
        bool t;
        Parser MyParser;
        m1= New (MyParser);
        m1.a1 = 3;
        while (m1<10) {
            for ((m2="3");m2=m2+1;(2)) ;
            Console.Writeline(m1 * 2, m1.a1);
            if (!(m1*2 == m2)) {
                break;
            }
        }
	if (m2<=m3) m1=1;
        t = (a1 < y && a1 <= y);
    }
}