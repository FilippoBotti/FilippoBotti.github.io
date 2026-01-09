# Filippo Botti - Portfolio Website

Portfolio personale con visualizzazione MLP interattiva e gestione dinamica delle pubblicazioni.

## Struttura File

```
sito/
├── sito.html              # Homepage con MLP visualization e CV
├── publications.html       # Pagina dedicata alle pubblicazioni
├── style.css              # Tutti gli stili del sito
├── common.js              # Funzioni condivise (navbar, footer, caricamento JSON)
├── publications.json      # DATABASE delle pubblicazioni
├── favicon.svg            # Icona del sito
├── fbotti.png            # Foto profilo
└── img_publications/     # Cartella immagini pubblicazioni
    └── [pub-name]/
        ├── arch.pdf
        └── results.pdf
```

## Gestione Pubblicazioni

### Aggiungere una nuova pubblicazione

**Modifica solo il file `publications.json`** aggiungendo una nuova entry:

```json
{
  "title": "Titolo del Paper",
  "publisher": "Nome della Conference/Journal",
  "year": "2026",
  "authors": "Autore1, Autore2, Autore3",
  "abstract": "Abstract completo del paper...",
  "bibtex": "@inproceedings{...\n}",
  "architecture_path": "img_publications/paper-name/arch.pdf",
  "results_path": "img_publications/paper-name/results.pdf",
  "github": "https://github.com/...",
  "arxiv": "https://arxiv.org/abs/..."
}
```

**Campi obbligatori:**
- `title`: Titolo della pubblicazione
- `publisher`: Conference o journal
- `year`: Anno di pubblicazione
- `authors`: Lista autori separati da virgola

**Campi opzionali** (lasciare stringa vuota `""` se non disponibili):
- `abstract`: Abstract del paper
- `bibtex`: Citation in formato BibTeX
- `architecture_path`: Path relativo all'immagine dell'architettura
- `results_path`: Path relativo all'immagine dei risultati
- `github`: Link al repository GitHub
- `arxiv`: Link alla pagina arXiv

### Il JSON viene usato automaticamente in:

1. **sito.html** - Sezione Publications del CV (con paginazione 5 per pagina)
2. **publications.html** - Pagina dedicata con dettagli completi

## Funzionalità

### Homepage (sito.html)
- Visualizzazione MLP interattiva con neuroni dinamici
- Foto profilo con linee animate ai neuroni di input
- CV completo con sezioni: Education, Work, Publications, Teaching, Skills
- Pulsante "View Details" per ogni pubblicazione → porta a publications.html

### Publications Page (publications.html)
- Lista compatta iniziale (solo titoli)
- Espansione al click per mostrare tutti i dettagli
- Filtro automatico se aperto da link diretto (#publication-id)
- Pulsante "Copy BibTeX" con feedback visivo
- Link GitHub e arXiv quando disponibili

### Navbar Unificata
- Home, Publications, Education, Work Experience, Teaching, R&D
- Generata dinamicamente da `common.js`
- Stessa struttura in tutte le pagine

## Theme & Styling

**Colori pastello** gestiti centralmente tramite CSS variables in `:root`:
- `--primary-green: #93c5fd` (blu pastello)
- `--bg-primary: #f0f9ff` (sfondo chiaro)
- Modificare i valori in `style.css` per cambiare tutto il tema

## Tecnologie

- HTML5
- CSS3 con variabili CSS
- Vanilla JavaScript (no framework)
- Bootstrap 5.3.2 (grid e componenti)
- Bootstrap Icons
- Google Fonts (Roboto)
- SVG per connessioni neuroni

## Deployment

Il sito può essere aperto direttamente nel browser senza server web.

Per caricare `publications.json` via fetch (senza CORS issues), servire con un server HTTP locale:

```bash
# Python 3
python3 -m http.server 8000

# Oppure PHP
php -S localhost:8000
```

Poi apri `http://localhost:8000/sito.html`

## Manutenzione

**Per aggiungere pubblicazioni:** Modifica solo `publications.json`

**Per modificare dati CV:** Modifica gli oggetti in `sito.html`:
- `detailedCVData` per education, work, teaching, skills
- `shortCVData` per i dati mostrati nei neuroni

**Per modificare colori:** Modifica le variabili CSS in `style.css` (`:root`)

**Per modificare navbar/footer:** Modifica `common.js`
