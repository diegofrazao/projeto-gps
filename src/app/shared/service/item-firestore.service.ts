import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Produto} from '../model/produto';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemFirestoreService {

  colecaoItem: AngularFirestoreCollection<Item>;
  NOME_COLECAO = 'itens';

  constructor(private afs: AngularFirestore) {
    this.colecaoItem = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Item[]>{
    return this.colecaoItem.valueChanges({idField: 'id'});
  }

  inserir(item: Item): Observable<object>{
    // @ts-ignore
    delete item.id;
    return from(this.colecaoItem.add(Object.assign({}, item)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoItem.doc(id).delete());
  }

  atualizar(item: Item, it: Item): Observable<void> {
    // @ts-ignore
    delete it.id;
    return from(this.colecaoItem.doc(item.id).update(Object.assign({}, it)));
  }

  pesquisarPorProduto(produto: Produto): Observable<Item[]> {
    let itens: AngularFirestoreCollection<Item>;
    itens = this.afs.collection(this.NOME_COLECAO);
    return itens.valueChanges({idField: 'id'}).pipe(map(i => i.filter(it => it.produto.id.toString() === produto.id.toString())));
  }
}
