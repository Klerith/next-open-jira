import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';


export function middleware( req: NextRequest, ev: NextFetchEvent ) {

    // if (req.page.name === '/api/entries') return NextResponse.next();

    const id = req.page.params?.id || '';

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

    if ( !checkMongoIDRegExp.test( id ) ) {
        // return res.status(400).json({ message: 'El id no es válido ' + id })
        return new Response( JSON.stringify({ message: 'El id no es válido ' + id }), {
            status: 400,
            headers: {
                'Content-Type':'application/json'
            }
        });
    }

    return NextResponse.next();

}




