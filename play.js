turnNum = 0;
p = [
    [ 0, 0, 0 ] ,
    [ 0, 0, 0 ] ,
    [ 0, 0, 0 ] ,
];
function turn(squareX, squareY)
{
    turnNum++;
    e = document.getElementById('b' + squareX + '' +squareY)

    if (turnNum % 2 == 0)
    {
        if (p[squareX - 1][squareY - 1] !=  0 )
        {
            turnNum = turnNum - 1;
            return;
        }
        if (Win() || Tie())
        {
            turnNum = turnNum - 1;
            return;
        }
        e.innerHTML = 'O'
        p[squareX - 1][squareY - 1] = -1;

    }
    else
    {
        if (p[squareX - 1][squareY - 1] !=  0 )
        {
            turnNum = turnNum - 1;
            return;
        }
        if (Win() || Tie())
        {
            turnNum = turnNum - 1;
            return;
        }
        e.innerHTML = 'X'
        p[squareX - 1][squareY - 1] = 1;
    }
    if (Win())
    {
        e = document.getElementById('Win')
        if (turnNum % 2 == 0)
        {
            e.innerHTML = 'O is the winner'
        }
        else
        {
            e.innerHTML = 'X is the winner'
        }
        }

        e = document.getElementById('Win')
        if (Tie())
        {
            e.innerHTML = 'Tie'
        }
}

function Win()
{
    for(i = 0; i <= 2; i++)
    {
        if (p[i][0] == p[i][1] && p[i][0] == p[i][2] && p[i][0] != 0)
        {
            return true;
        }
        if (p[0][i] == p[1][i] && p[0][i] == p[2][i] && p[0][i] != 0)
        {
            return true;
        }
    }
    if (p[0][0] == p[1][1] && p[1][1] == p[2][2] && p[0][0] != 0)
    {
        return true;
    }
    if (p[2][0] == p[1][1] && p[1][1] == p[0][2] && p[0][2] != 0)
    {
        return true;
    }
}

function Tie()
{
    for(i = 0; i <= 2; i++)
    {
        for(l = 0; l <= 2; l++)
        {
            if (p[i][l] == 0)
            {
                return false;
            }
        }
    }
    if (Win())
    {
        return false;
    }
    return true;
}


function reset() // remake reset button
{
    p = [
        [ 0, 0, 0 ] ,
        [ 0, 0, 0 ] ,
        [ 0, 0, 0 ] ,
    ];

    for(i = 1; i <= 3; i++)
    {
        for(l = 1; l <= 3; l++)
        {
            e = document.getElementById('b' + l + '' + i)
            e.innerHTML = ''
        }
    }

    e = document.getElementById('Win')
        e.innerHTML = ''

}