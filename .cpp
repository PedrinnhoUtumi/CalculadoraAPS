#include <iostream>
using namespace std;

char operetion(float num = 0, float num2 = 0) {
    char operation;
    cout << "enter your operation: ";
    cin >> operation;

    switch (operation)
    {
    case '+':
        cout << num + num2 << endl;
        break;
    
    case '-':
        cout << num - num2 << endl;
        break;
    
    case '*':
        cout << num * num2 << endl;
        break;
    
    case '/':
        cout << num / num2 << endl;
        break;
    
    default:
        cout << "erro" << endl;
        break;
    }

    return operation;
}

int main() {
    float num = 0;
    cout << "digite numero 1: ";
    cin >> num;

    float num2 = 0;
    cout << "digite numero 1: ";
    cin >> num2;

    operetion(num, num2);

}