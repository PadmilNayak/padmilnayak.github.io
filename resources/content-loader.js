// ============================================================
// content-loader.js
// Tiny parser for the site's Markdown + YAML-frontmatter content
// files in /content. Shared by index.html, project.html and
// publication.html. Requires js-yaml to already be loaded on the
// page (for parsing the frontmatter block).
//
// File shape:
//   ---
//   key: value          <- YAML frontmatter
//   ---
//   Markdown body text   <- optional, becomes `.body`
//
// Multiple entries in one file are separated by a line containing
// only: %%%
//
// HTML comments (<!-- ... -->) anywhere in the file are stripped
// before parsing, so instructional headers can live at the top of
// a content file without breaking the first entry.
// ============================================================

function stripContentComments(text) {
    return text.replace(/<!--[\s\S]*?-->/g, '').trim();
}

function parseContentDoc(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return { body: raw.trim() };
    const meta = jsyaml.load(match[1]) || {};
    const body = match[2].trim();
    return Object.assign({}, meta, { body });
}

// A file containing a single entry (config.md, skills.md)
function parseSingle(text) {
    return parseContentDoc(stripContentComments(text));
}

// A file containing multiple %%%-separated entries (projects.md, publications.md)
function parseCollection(text) {
    return stripContentComments(text)
        .split(/\n%%%\n/)
        .map(s => s.trim())
        .filter(Boolean)
        .map(parseContentDoc);
}
